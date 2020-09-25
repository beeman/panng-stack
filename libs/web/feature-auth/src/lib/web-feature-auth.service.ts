import { ApolloAngularSDK, User } from '@angular-graphql/web/data-access'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { catchError, concatMap, filter, map, tap } from 'rxjs/operators'

export const WEB_AUTH_TOKEN = 'WEB_AUTH_TOKEN'
export const WEB_AUTH_USER = 'WEB_AUTH_USER'

@Injectable({
  providedIn: 'root',
})
export class WebFeatureAuthService {
  private _token = new BehaviorSubject<string>(null)
  private _user = new BehaviorSubject<User>(null)

  public user$: Observable<User> = this._user.asObservable()

  public get token(): string {
    return this._token.getValue()
  }

  public set token(token: string) {
    localStorage.setItem(WEB_AUTH_TOKEN, token)
    console.log('Storing token')
    this._token.next(token)
  }

  public get user(): User {
    return this._user.getValue()
  }

  public set user(user: User) {
    localStorage.setItem(WEB_AUTH_USER, JSON.stringify(user))
    console.log('Storing user')
    this._user.next(user)
  }

  constructor(private sdk: ApolloAngularSDK) {
    this.hydrate()
  }

  hydrate() {
    const token = localStorage.getItem(WEB_AUTH_TOKEN)
    if (token) {
      console.log(`Hydrated token from localStorage token WEB_AUTH_TOKEN`)
      this._token.next(token)
    }
    const user = localStorage.getItem(WEB_AUTH_USER)
    if (user) {
      console.log(`Hydrated user from localStorage token WEB_AUTH_USER`)
      this._user.next(JSON.parse(user))
    }
  }

  handleAction({ type, payload }: { payload: any; type: string }) {
    console.log({ type, payload })
    switch (type) {
      case 'LOGIN':
        return of(null)
      default:
        return of(null)
    }
  }

  login({ username, password }) {
    return this.sdk.login({ data: { username, password } }).pipe(
      map((result) => result.data.login),
      filter((data) => !!data.token),
      tap((data) => (this.token = data.token)),
      tap((data) => (this.user = data.user)),
      catchError((err) => {
        console.log('err', err)
        return err
      }),
    )
  }

  register({ email, password, name, username }) {
    return this.sdk.register({ data: { email, password, name, username } }).pipe(
      map((result) => result?.data?.register?.token),
      filter((token) => !!token),
      tap((token: string) => (this.token = token)),
      catchError((err) => {
        console.log('err', err)
        return err
      }),
      concatMap(() => this.me()),
    )
  }

  logout() {
    localStorage.removeItem(WEB_AUTH_TOKEN)
    localStorage.removeItem(WEB_AUTH_USER)
    this._token.next(null)
    this._user.next(null)
    return of(true)
  }

  me() {
    return this.sdk.me().pipe(
      map((result) => result.data.me),
      filter((me) => !!me),
      tap((me: User) => (this.user = me)),
    )
  }
}
