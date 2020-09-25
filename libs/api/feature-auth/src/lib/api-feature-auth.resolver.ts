import { Resolver } from '@nestjs/graphql'

import { ApiFeatureAuthService } from './api-feature-auth.service'

@Resolver()
export class ApiFeatureAuthResolver {
  constructor(private readonly service: ApiFeatureAuthService) {}
}
