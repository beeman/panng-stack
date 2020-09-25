import { Module } from '@nestjs/common'

import { ApiFeatureAuthController } from './api-feature-auth.controller'
import { ApiFeatureAuthResolver } from './api-feature-auth.resolver'
import { ApiFeatureAuthService } from './api-feature-auth.service'

@Module({
  controllers: [ApiFeatureAuthController],
  exports: [],
  imports: [],
  providers: [ApiFeatureAuthResolver, ApiFeatureAuthService],
})
export class ApiFeatureAuthModule {}
