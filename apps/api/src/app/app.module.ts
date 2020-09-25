import { ApiFeatureAuthModule } from '@angular-graphql/api/feature-auth'
import { ApiFeatureCoreModule } from '@angular-graphql/api/feature-core'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiFeatureAuthModule, ApiFeatureCoreModule],
})
export class AppModule {}
