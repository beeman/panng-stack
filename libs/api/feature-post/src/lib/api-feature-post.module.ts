import { ApiDataAccessModule } from '@angular-graphql/api/data-access'
import { Module } from '@nestjs/common'
import { ApiFeaturePostProfileResolver } from './api-feature-post-profile.resolver'
import { ApiFeaturePostResolver } from './api-feature-post.resolver'
import { ApiFeaturePostService } from './api-feature-post.service'

@Module({
  imports: [ApiDataAccessModule],
  providers: [ApiFeaturePostResolver, ApiFeaturePostProfileResolver, ApiFeaturePostService],
})
export class ApiFeaturePostModule {}
