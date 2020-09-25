import { WebDataAccessModule } from '@angular-graphql/web/data-access'
import { NgModule } from '@angular/core'
import { WebDataAccessAuthService } from './web-data-access-auth.service'

@NgModule({
  imports: [WebDataAccessModule],
  providers: [WebDataAccessAuthService],
})
export class WebDataAccessAuthModule {}
