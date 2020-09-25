import { Float, Query, Resolver } from '@nestjs/graphql'
import { ApiFeatureCoreService } from './api-feature-core.service'

@Resolver()
export class ApiFeatureCoreResolver {
  constructor(private readonly service: ApiFeatureCoreService) {}

  @Query(() => Float)
  uptime() {
    return this.service.uptime()
  }
}
