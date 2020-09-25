import { Module } from '@nestjs/common'

import { ApiDataAccessService } from './api-data-access.service'

@Module({
  exports: [ApiDataAccessService],
  providers: [ApiDataAccessService],
})
export class ApiDataAccessModule {}
