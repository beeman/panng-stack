import { ApiDataAccessModule } from '@angular-graphql/api/data-access'
import { Module } from '@nestjs/common'

import { ApiFeatureCommentResolver } from './api-feature-comment.resolver'
import { ApiFeatureCommentService } from './api-feature-comment.service'

@Module({
  imports: [ApiDataAccessModule],
  providers: [ApiFeatureCommentResolver, ApiFeatureCommentService],
})
export class ApiFeatureCommentModule {}
