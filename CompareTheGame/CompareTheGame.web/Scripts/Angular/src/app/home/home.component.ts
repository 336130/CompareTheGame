import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '',
  template: `
    <p>{{title}}</p>
    <a (click)="GoToGame()">Game</a>
  `
})

export class HomeComponent {
  constructor(public router: Router) { };
  title = "Home page"

  GoToGame(): void {
    this.router.navigateByUrl("game");
  }
}
