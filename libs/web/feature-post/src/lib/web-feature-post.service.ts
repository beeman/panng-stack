import { Post, WebDataAccessService } from '@angular-graphql/web/data-access'
import { WebDataAccessAuthService } from '@angular-graphql/web/data-access-auth'
import { Injectable } from '@angular/core'
import { BsModalService } from 'ngx-bootstrap/modal'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { PostActions } from './actions/post.actions'

import { PostModalComponent } from './components/post-modal.component'

const formatPost = (post: Post) => ({
  ...post,
  author: {
    ...post.author,
    path: '/profiles/' + post.author.username,
  },
  buttons: [
    {
      icon: 'fa fa-fw fa-comment',
      label: `${post.commentCount} Comments`,
      payload: { id: post.id },
      type: PostActions.SHOW_COMMENTS,
    },
  ],
})

const formatPosts = (posts: Post[]) => posts.map(formatPost)

@Injectable()
export class WebFeaturePostService {
  constructor(
    private auth: WebDataAccessAuthService,
    private data: WebDataAccessService,
    private modalService: BsModalService,
  ) {}

  posts() {
    return this.data.sdk.posts({}, { fetchPolicy: 'network-only' }).pipe(
      map((result) => result?.data?.posts),
      map(formatPosts),
    )
  }

  post(id: string) {
    return this.data.sdk.post({ id }, { fetchPolicy: 'network-only' }).pipe(
      map((result) => result.data.post),
      map(formatPost),
    )
  }

  createPost({ text }) {
    return this.data.sdk.createPost({ data: { text } })
  }

  comments(postId: string) {
    return this.data.sdk
      .comments({ postId }, { fetchPolicy: 'network-only' })
      .pipe(map((result) => result?.data?.comments))
  }

  createComment(postId, { text }) {
    return this.data.sdk.createComment({ data: { postId, text } }, { fetchPolicy: 'no-cache' })
  }

  openComments({
    title,
    handler,
    post,
    comments,
  }: {
    handler?: (data) => Observable<any>
    title?: string
    post?: Post
    comments?: Comment[]
  }) {
    const fetcher = (id) => this.comments(id)
    const showPost = { ...post }
    // @ts-ignore
    delete showPost.buttons
    this.modalService.show(PostModalComponent, {
      initialState: {
        title,
        handler,
        fetcher,
        author$: this.auth.user$,
        post: showPost,
        // comments: ,
      },
    })
  }
}
