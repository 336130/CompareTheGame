import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  template: `
  <main-menu></main-menu>
    <div class="container body-content">
      <router-outlet></router-outlet>
    </div>
  <custom-footer></custom-footer>
  `
})

export class AppComponent {
}
