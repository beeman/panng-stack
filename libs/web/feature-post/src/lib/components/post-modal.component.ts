import { Post, User } from '@angular-graphql/web/data-access'
import { Component, EventEmitter, OnInit, Output } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-post-comments',
  template: `
    <ui-card>
      <ui-card-body>
        <ui-comment [comment]="post"></ui-comment>
        <hr />
        <ng-container *ngIf="comments.length">
          <ng-container *ngFor="let comment of comments">
            <div class="my-3">
              <ui-comment [comment]="comment"></ui-comment>
            </div>
          </ng-container>
        </ng-container>
        <ui-loading [loading]="loading && (!comments || !comments.length)"></ui-loading>
        <div *ngIf="!loading && !comments.length">
          <div class="text-center py-5">Nobody commented yet...</div>
        </div>
        <ng-container *ngIf="author$ | async as author">
          <hr />
          <ui-comment-form
            [reset$]="refresh$"
            (action)="handleAction($event)"
            [avatarUrl]="author.avatarUrl"
          ></ui-comment-form>
        </ng-container>
      </ui-card-body>
    </ui-card>
  `,
  styles: [
    `
      .card-footer {
        background-color: inherit;
      }
      .avatar {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        border: 1px solid #2b3e50;
      }
    `,
  ],
})
export class PostModalComponent implements OnInit {
  public author$: Observable<User>
  public post: Post
  public comments: Comment[] = []
  @Output() action = new EventEmitter()
  loading = true
  handler: (id) => Observable<any>
  fetcher: (id) => Observable<any>
  public _refresh = new BehaviorSubject(true)
  public refresh$ = this._refresh.asObservable()

  ngOnInit() {
    this.refresh$
      .pipe(
        tap(() => (this.loading = true)),
        switchMap(() => this.fetcher(this.post.id)),
      )
      .subscribe((comments) => {
        this.loading = false
        this.comments = comments
      })
  }

  refresh() {
    this._refresh.next(true)
  }

  handleAction({ payload: { text } }) {
    this.handler({ text }).subscribe(() => {
      this.refresh()
      this.action.emit({ type: 'REFRESH' })
    })
    console.log(text)
  }
}
