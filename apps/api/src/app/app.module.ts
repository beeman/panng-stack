import { ApiFeatureAuthModule } from '@angular-graphql/api/feature-auth'
import { ApiFeatureCommentModule } from '@angular-graphql/api/feature-comment'
import { ApiFeatureCoreModule } from '@angular-graphql/api/feature-core'
import { ApiFeaturePostModule } from '@angular-graphql/api/feature-post'
import { ApiFeatureProfileModule } from '@angular-graphql/api/feature-profile'
import { Module } from '@nestjs/common'

@Module({
  imports: [
    ApiFeatureAuthModule,
    ApiFeatureCommentModule,
    ApiFeatureCoreModule,
    ApiFeaturePostModule,
    ApiFeatureProfileModule,
  ],
})
export class AppModule {}
