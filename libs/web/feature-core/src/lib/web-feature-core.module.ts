import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { GraphQLModule } from './graphql.module'

@NgModule({
  imports: [CommonModule, GraphQLModule],
})
export class WebFeatureCoreModule {}
