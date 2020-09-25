import { Component, Input } from '@angular/core'
import { UiLink } from '@kikstart-ui/ui-link'

@Component({
  selector: 'app-header-dropdown',
  template: `
    <li dropdown placement="bottom right" class="nav-item dropdown">
      <a
        dropdownToggle
        class="cursor-pointer nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <ng-content></ng-content>
      </a>
      <div class="dropdown-menu dropdown-menu-right" *dropdownMenu aria-labelledby="navbarDropdown">
        <ng-container *ngFor="let link of links">
          <ui-link linkClass="cursor-pointer dropdown-item" [link]="link"></ui-link>
        </ng-container>
      </div>
    </li>
  `,
})
export class AppHeaderDropdownComponent {
  @Input() public links: UiLink[] = []
}
