import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { ApiFeatureAuthService } from './api-feature-auth.service'
import { CtxUser } from './decorators/ctx-user.decorator'

import { LoginInput } from './dto/login.input'
import { RegisterInput } from './dto/register.input'
import { GqlAuthGuard } from './guards/gql-auth.guard'
import { User } from './models/user'
import { UserToken } from './models/user-token'

@Resolver(() => UserToken)
export class ApiFeatureAuthResolver {
  constructor(private readonly service: ApiFeatureAuthService) {}

  @Query(() => User, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async me(@CtxUser() user: User) {
    console.log('user', user)
    return user
  }

  @Mutation(() => UserToken, { nullable: true })
  async register(@Args('data') data: RegisterInput) {
    return this.service.register(data)
  }

  @Mutation(() => UserToken, { nullable: true })
  async login(@Args('data') { username, password }: LoginInput) {
    return this.service.login(username.trim(), password)
  }

  @ResolveField('user')
  user(@Parent() auth: UserToken) {
    return this.service.getUserFromToken(auth.token)
  }
}
