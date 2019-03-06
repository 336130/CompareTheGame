import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'carousel',
  templateUrl:'./carousel.component.html'
})

export class CarouselComponent {
  @Input() title: string;
  @Input() gamesToDisplay;

  constructor() {
  }
}
