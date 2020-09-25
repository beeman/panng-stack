import { WebDataAccessAuthModule } from '@angular-graphql/web/data-access-auth'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UiFormModule } from '@kikstart-ui/ui-form'

import { AuthPageComponent } from './components/auth-page/auth-page.component'
import { LoginComponent } from './containers/login.component'
import { LogoutComponent } from './containers/logout.component'
import { ProfileComponent } from './containers/profile.component'
import { RegisterComponent } from './containers/register.component'

import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [{ path: 'profile', component: ProfileComponent }],
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), WebDataAccessAuthModule, UiFormModule],
  declarations: [AuthPageComponent, LoginComponent, RegisterComponent, ProfileComponent, LogoutComponent],
})
export class WebFeatureAuthModule {}
