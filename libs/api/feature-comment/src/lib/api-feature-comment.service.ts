import { ApiDataAccessService } from '@angular-graphql/api/data-access'
import { Injectable } from '@nestjs/common'
import { CreateCommentInput } from './dto/create-comment.input'

@Injectable()
export class ApiFeatureCommentService {
  constructor(private readonly data: ApiDataAccessService) {}

  comments(postId) {
    return this.data.comment.findMany({
      where: { post: { id: postId } },
      orderBy: { createdAt: 'asc' },
      take: 100,
    })
  }

  comment({ id }) {
    return this.data.comment.findOne({ where: { id } })
  }

  async createComment(userId: string, { postId, text }: CreateCommentInput) {
    const comment = await this.data.comment.create({
      data: {
        author: { connect: { id: userId } },
        post: { connect: { id: postId } },
        text,
      },
    })
    const post = await this.data.post.findOne({ where: { id: postId } })
    await this.data.post.update({ where: { id: postId }, data: { commentCount: post.commentCount + 1 } })
    return comment
  }

  async deleteComment(userId: string, id: string) {
    const author = await this.data.comment.findOne({ where: { id } }).author()
    if (author.id !== userId) {
      throw new Error('You can only delete your own comments.')
    }
    return this.data.comment.delete({ where: { id } })
  }

  commentAuthor(id: string) {
    return this.data.comment.findOne({ where: { id } }).author()
  }

  commentPost(id: string) {
    return this.data.comment.findOne({ where: { id } }).post()
  }
}
