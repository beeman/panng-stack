import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-profile-card',
  template: `
    <div class="jumbotron mb-0 text-center">
      <div class="my-3 mb-5">
        <div class="mb-3">
          <ui-avatar *ngIf="avatarUrl" [avatarUrl]="avatarUrl" size="xl"></ui-avatar>
          <h1 class="display-4 my-2">{{ username }}</h1>
        </div>
        <p class="lead mt-2 text-muted">
          {{ name }}
        </p>
        <p class="lead mt-2">
          {{ bio }}
        </p>
        <p class="lead mt-2">
          {{ location }}
        </p>
      </div>
    </div>
  `,
})
export class ProfileCardComponent {
  @Input() avatarUrl?: string
  @Input() username?: string
  @Input() name?: string
  @Input() bio?: string
  @Input() location?: string
}
