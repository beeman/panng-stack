import { WebDataAccessAuthService } from '@angular-graphql/web/data-access-auth'
import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { FormHelper } from '@kikstart-ui/ui-form'

@Component({
  template: `
    <auth-page (action)="handleAction($event)" label="Register" [fields]="fields"> </auth-page>
    <!--    <ui-auth-->
    <!--      [brand]="brand"-->
    <!--      [fields]="fields"-->
    <!--      [form]="form"-->
    <!--      label="Register"-->
    <!--      (action)="handleAction($event)"-->
    <!--      [links]="[-->
    <!--        { label: 'Log in', path: '/login' },-->
    <!--        { label: 'Register', path: '/register' }-->
    <!--      ]"-->
    <!--    ></ui-auth>-->
  `,
})
export class RegisterComponent implements OnInit {
  brand = {
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
    FormHelper.email('email', {
      label: 'Email',
      required: true,
    }),
    FormHelper.password('password', {
      label: 'Password',
      required: true,
    }),
    FormHelper.input('name', {
      label: 'Name',
      required: true,
    }),
  ]

  constructor(private router: Router, public auth: WebDataAccessAuthService) {}

  ngOnInit() {}

  async handleAction({ type, payload }) {
    this.form.disable()
    return this.auth.register(payload).subscribe(
      (res) => {
        console.log('YAY USER REGISTERED', res)
        return this.router.navigate(['/'])
      },
      (err) => {
        console.log('error submitting form', err)
        this.form.enable()
      },
    )
  }
}
