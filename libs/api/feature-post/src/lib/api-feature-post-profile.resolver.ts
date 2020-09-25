import { Profile } from '@angular-graphql/api/feature-profile'
import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { Post } from './models/post'

@Resolver(() => Profile)
export class ApiFeaturePostProfileResolver {
  @ResolveField(() => Post, { nullable: true })
  posts(@Parent() profile) {
    return profile?.posts
  }
}
