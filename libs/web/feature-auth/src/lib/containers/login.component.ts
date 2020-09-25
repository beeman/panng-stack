import { WebDataAccessAuthService } from '@angular-graphql/web/data-access-auth'
import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { FormHelper } from '@kikstart-ui/ui-form'
import { filter, map } from 'rxjs/operators'

@Component({
  template: `<auth-page (action)="handleAction($event)" label="Log in" [fields]="fields"> </auth-page> `,
})
export class LoginComponent implements OnInit {
  public brand = {
    logo: '/assets/logo.png',
    name: 'GraphQL',
    product: 'with Angular',
  }
  form = new FormGroup({})
  fields: FormHelper[] = [
    FormHelper.input('username', {
      label: 'Username',
      required: true,
    }),
    FormHelper.password('password', {
      label: 'Password',
      required: true,
    }),
  ]

  constructor(private route: ActivatedRoute, private router: Router, public auth: WebDataAccessAuthService) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(
        map((params) => params.token),
        filter((token) => !!token),
      )
      .subscribe(() => this.router.navigate(['/']))
  }

  async handleAction({ payload }) {
    this.form.disable()
    return this.auth.login(payload).subscribe(
      (res) => this.router.navigate(['/']),
      () => this.form.enable(),
      () => this.form.enable(),
    )
  }
}
