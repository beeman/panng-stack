import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UiAvatarModule } from '@kikstart-ui/ui-avatar'
import { UiLoadingModule } from '@kikstart-ui/ui-loading'
import { ProfileCardComponent } from './components/profile-card.component'
import { ProfileDetailComponent } from './containers/profile-detail.component'
import { WebFeatureProfileService } from './web-feature-profile.service'

const routes: Routes = [{ path: ':username', component: ProfileDetailComponent }]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), UiAvatarModule, UiLoadingModule],
  providers: [WebFeatureProfileService],
  declarations: [ProfileCardComponent, ProfileDetailComponent],
})
export class WebFeatureProfileModule {}
