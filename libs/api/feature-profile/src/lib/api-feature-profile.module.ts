import { ApiDataAccessModule } from '@angular-graphql/api/data-access'
import { Module } from '@nestjs/common'
import { ApiFeatureProfileResolver } from './api-feature-profile.resolver'
import { ApiFeatureProfileService } from './api-feature-profile.service'

@Module({
  imports: [ApiDataAccessModule],
  providers: [ApiFeatureProfileResolver, ApiFeatureProfileService],
})
export class ApiFeatureProfileModule {}
