import { Resolver } from '@nestjs/graphql'

import { ApiDataAccessService } from './api-data-access.service'

@Resolver()
export class ApiDataAccessResolver {
  constructor(private readonly service: ApiDataAccessService) {}
}
