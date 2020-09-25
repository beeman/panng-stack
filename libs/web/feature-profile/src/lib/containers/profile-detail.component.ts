import { Profile } from '@angular-graphql/web/data-access'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import { WebFeatureProfileService } from '../web-feature-profile.service'

@Component({
  template: `
    <div class="container my-5">
      <ng-container *ngIf="profile$ | async as profile; else loading">
        <app-profile-card
          [avatarUrl]="profile?.avatarUrl"
          [username]="profile?.username"
          [name]="profile?.name"
          [bio]="profile?.bio"
          [location]="'Location Placeholder'"
        >
        </app-profile-card>
      </ng-container>
      <ng-template #loading>
        <ui-loading [loading]="true"></ui-loading>
      </ng-template>
    </div>
  `,
})
export class ProfileDetailComponent implements OnInit {
  public profile$: Observable<Profile>

  constructor(private route: ActivatedRoute, private service: WebFeatureProfileService) {}

  ngOnInit() {
    this.profile$ = this.route.params.pipe(
      map((params) => params.username),
      switchMap((username) => this.service.profile(username)),
    )
  }
}
