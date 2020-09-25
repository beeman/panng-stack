import { WebDataAccessAuthService } from '@angular-graphql/web/data-access-auth'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormHelper } from '@kikstart-ui/ui-form'

@Component({
  selector: 'auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  links = [
    { route: '/login', title: 'Log in' },
    { route: '/register', title: 'Register' },
  ]
  name: string

  @Input() title = 'GraphQL with Angular'
  @Input() message: string
  @Input() label: string
  @Output() action = new EventEmitter()

  @Input() form = new FormGroup({})
  @Input() model = {}
  @Input() fields: FormHelper[] = []
  @Input() navigation = true

  constructor(public service: WebDataAccessAuthService) {}
}
