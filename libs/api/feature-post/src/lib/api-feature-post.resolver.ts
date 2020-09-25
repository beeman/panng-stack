import { CtxUser, GqlAuthGuard, User } from '@angular-graphql/api/feature-auth'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { ApiFeaturePostService } from './api-feature-post.service'
import { CreatePostInput } from './dto/create-post.input'
import { Comment } from '../../../feature-comment/src/lib/models/comment'
import { Post } from './models/post'

@Resolver(() => Post)
export class ApiFeaturePostResolver {
  constructor(private readonly service: ApiFeaturePostService) {}

  @Query(() => [Post], { nullable: true })
  posts() {
    return this.service.posts()
  }

  @Query(() => [Post], { nullable: true })
  userPosts(@Args('userId') userId: string) {
    return this.service.userPosts(userId)
  }

  @Query(() => Post, { nullable: true })
  post(@CtxUser() user: User, @Args('id') id: string) {
    return this.service.post({ id })
  }

  @Mutation(() => Post, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async createPost(@CtxUser() user: User, @Args('data') data: CreatePostInput) {
    return this.service.createPost(user.id, data)
  }

  @Mutation(() => Post, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async deletePost(@CtxUser() user: User, @Args('id') id: string) {
    return this.service.deletePost(user.id, id)
  }

  @ResolveField('author', () => User, { nullable: true })
  author(@Parent() post: Post) {
    return this.service.postAuthor(post.id)
  }

  @ResolveField('comments', () => [Comment], { nullable: true })
  comments(@Parent() post: Post) {
    return this.service.postComments(post.id)
  }
}
