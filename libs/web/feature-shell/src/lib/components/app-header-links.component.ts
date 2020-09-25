import { Component, Input } from '@angular/core'
import { UiLink } from '@kikstart-ui/ui-link'

@Component({
  selector: 'app-header-link',
  template: `
    <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: false }">
      <a *ngIf="link.path" [routerLink]="link.path" class="nav-link" href=""
        ><ui-label [icon]="link.icon" [label]="link.label"></ui-label
      ></a>
      <a *ngIf="link.url" [attr.href]="link.url" class="nav-link"
        ><ui-label [icon]="link.icon" [label]="link.label"></ui-label
      ></a>
    </li>
  `,
})
export class AppHeaderLinksComponent {
  @Input() public link: UiLink
}
