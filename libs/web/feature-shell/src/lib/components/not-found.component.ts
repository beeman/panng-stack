import { Component, OnInit } from '@angular/core'

@Component({
  template: `
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card card-danger mt-5">
          <div class="card-header">Oh no!!</div>
          <div class="card-body">
            The requested page could not be found! :(
          </div>
        </div>
      </div>
    </div>
  `,
})
export class NotFoundComponent {}
