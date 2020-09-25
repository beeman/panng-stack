import { WebDataAccessAuthModule } from '@angular-graphql/web/data-access-auth'
import { WebFeatureCoreModule } from '@angular-graphql/web/feature-core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiAvatarModule } from '@kikstart-ui/ui-avatar'
import { UiBrandModule } from '@kikstart-ui/ui-brand'
import { UiLabelModule } from '@kikstart-ui/ui-label'
import { UiLinkModule } from '@kikstart-ui/ui-link'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

import { AppHeaderDropdownComponent } from './components/app-header-dropdown.component'
import { AppHeaderLinksComponent } from './components/app-header-links.component'
import { AppHeaderComponent } from './components/app-header.component'
import { AppLayoutComponent } from './components/app-layout.component'
import { NotFoundComponent } from './components/not-found.component'

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppHeaderDropdownComponent,
    AppHeaderLinksComponent,
    AppLayoutComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppLayoutComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: '/posts' },
          {
            path: 'posts',
            loadChildren: () => import('@angular-graphql/web/feature-post').then((m) => m.WebFeaturePostModule),
          },
          {
            path: 'profiles',
            loadChildren: () => import('@angular-graphql/web/feature-profile').then((m) => m.WebFeatureProfileModule),
          },
          { path: '404', component: NotFoundComponent },
        ],
      },
      {
        path: '',
        loadChildren: () => import('@angular-graphql/web/feature-auth').then((m) => m.WebFeatureAuthModule),
      },
      { path: '**', pathMatch: 'full', redirectTo: '/404' },
    ]),
    WebFeatureCoreModule,
    WebDataAccessAuthModule,
    BsDropdownModule.forRoot(),
    UiAvatarModule,
    UiBrandModule,
    UiLinkModule,
    UiLabelModule,
  ],
})
export class WebFeatureShellModule {}
