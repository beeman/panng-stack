import { WebDataAccessAuthService } from '@angular-graphql/web/data-access-auth'
import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private service: WebDataAccessAuthService, private router: Router) {}

  canActivate() {
    if (this.service.user) {
      return true
    }
    console.log('You are not logged in!')
    this.router.navigate(['/login'])
  }
}
