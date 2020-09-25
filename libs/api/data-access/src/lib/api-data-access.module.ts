import { Module } from '@nestjs/common'

import { ApiDataAccessController } from './api-data-access.controller'
import { ApiDataAccessResolver } from './api-data-access.resolver'
import { ApiDataAccessService } from './api-data-access.service'

@Module({
  controllers: [ApiDataAccessController],
  exports: [],
  imports: [],
  providers: [ApiDataAccessResolver, ApiDataAccessService],
})
export class ApiDataAccessModule {}
