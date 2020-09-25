import { GraphQLIntercomModule } from '@kikstart-playground/graphql-intercom'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'

import { configuration } from './config/configuration'
import { validationSchema } from './config/validation'
import { ApiFeatureCoreController } from './api-feature-core.controller'
import { ApiFeatureCoreResolver } from './api-feature-core.resolver'
import { ApiFeatureCoreService } from './api-feature-core.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
    }),
    GraphQLIntercomModule.forRoot({ pubSub: new PubSub() }),
  ],
  controllers: [ApiFeatureCoreController],
  providers: [ApiFeatureCoreResolver, ApiFeatureCoreService],
  exports: [ApiFeatureCoreService],
})
export class ApiFeatureCoreModule {}
