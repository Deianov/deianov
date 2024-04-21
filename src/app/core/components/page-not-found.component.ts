import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>404</h1>
      <p>Page Not Found</p>
      <a href="/">Go back home</a>
    </div>
  `,
})
export class PageNotFoundComponent {}
