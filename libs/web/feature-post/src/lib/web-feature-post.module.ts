import { WebDataAccessAuthModule } from '@angular-graphql/web/data-access-auth'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UiCardModule } from '@kikstart-ui/ui-card'
import { UiCommentModule } from '@kikstart-ui/ui-comment'
import { UiLoadingModule } from '@kikstart-ui/ui-loading'

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal'
import { PostModalComponent } from './components/post-modal.component'
import { PostIndexComponent } from './containers/post-index.component'
import { WebFeaturePostService } from './web-feature-post.service'

const routes: Routes = [{ path: '', component: PostIndexComponent }]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    WebDataAccessAuthModule,
    UiCardModule,
    UiCommentModule,
    UiLoadingModule,
  ],
  providers: [BsModalService, WebFeaturePostService],
  declarations: [PostIndexComponent, PostModalComponent],
  entryComponents: [PostModalComponent],
})
export class WebFeaturePostModule {}
