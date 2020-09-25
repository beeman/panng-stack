import { WebDataAccessService } from '@angular-graphql/web/data-access'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'

@Injectable()
export class WebFeatureProfileService {
  constructor(private readonly data: WebDataAccessService) {}

  profiles() {
    return this.data.sdk.profiles().pipe(map((result) => result.data.profiles))
  }

  profile(username: string) {
    return this.data.sdk.profile({ username }).pipe(map((result) => result.data.profile))
  }
}
