import { Args, Query, Resolver } from '@nestjs/graphql'

import { ApiFeatureProfileService } from './api-feature-profile.service'
import { Profile } from './models/profile'

@Resolver(() => Profile)
export class ApiFeatureProfileResolver {
  constructor(private readonly service: ApiFeatureProfileService) {}

  @Query(() => [Profile], { nullable: true })
  profiles() {
    return this.service.profiles()
  }

  @Query(() => Profile, { nullable: true })
  profile(@Args('username') username: string) {
    return this.service.profile(username)
  }
}
