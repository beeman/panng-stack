import { WebDataAccessAuthService } from '@angular-graphql/web/data-access-auth'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  template: ` <!-- <ui-auth label="Log out..."></ui-auth> --> `,
})
export class LogoutComponent implements OnInit {
  constructor(private service: WebDataAccessAuthService, private router: Router) {}

  ngOnInit() {
    this.service.logout().subscribe(() => this.router.navigate(['/login']))
  }
}
