import { CtxUser, GqlAuthGuard, User } from '@angular-graphql/api/feature-auth'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { ApiFeatureCommentService } from './api-feature-comment.service'
import { CreateCommentInput } from './dto/create-comment.input'
import { Comment } from './models/comment'

@Resolver(() => Comment)
export class ApiFeatureCommentResolver {
  constructor(private readonly service: ApiFeatureCommentService) {}

  @Query(() => [Comment])
  comments(@Args('postId') postId: string) {
    return this.service.comments(postId)
  }

  @Mutation(() => Comment)
  @UseGuards(GqlAuthGuard)
  async createComment(@CtxUser() user: User, @Args('data') data: CreateCommentInput) {
    return this.service.createComment(user.id, data)
  }

  @Mutation(() => Comment)
  @UseGuards(GqlAuthGuard)
  async deleteComment(@CtxUser() user: User, @Args('id') id: string): Promise<any> {
    return this.service.deleteComment(user.id, id)
  }

  @ResolveField('author', () => User)
  author(@Parent() comment: Comment) {
    return this.service.commentAuthor(comment.id)
  }

  @ResolveField('post', () => [Comment])
  post(@Parent() comment: Comment) {
    return this.service.commentPost(comment.id)
  }
}
