import { User } from '@angular-graphql/web/data-access'
import { WebDataAccessAuthService } from '@angular-graphql/web/data-access-auth'
import { Component, OnInit } from '@angular/core'
import { UiLink } from '@kikstart-ui/ui-link'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { brand } from '../app.config'

@Component({
  template: `
    <app-header [links]="topLinks" [user]="user$ | async" [userLinks]="userLinks" [brand]="brand"></app-header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppLayoutComponent implements OnInit {
  public brand = brand
  public topLinks = []
  public loginLink = { divider: false, path: '/login', label: 'Log in', icon: 'fa fa-sign-in' }
  public userLinks: UiLink[] = [this.loginLink]
  public user$: Observable<User>

  constructor(private auth: WebDataAccessAuthService) {}

  ngOnInit() {
    this.user$ = this.auth.user$.pipe(
      tap((res) => {
        if (res) {
          this.userLinks = [
            { path: '/profiles/' + res.username, label: 'My Profile', icon: 'fa fa-user' },
            { path: '/logout', label: 'Log out', icon: 'fa fa-sign-out' },
          ]
        } else {
          this.userLinks = [this.loginLink]
        }
      }),
    )
  }
}
