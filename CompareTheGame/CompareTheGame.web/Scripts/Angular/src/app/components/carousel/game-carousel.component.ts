import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'game-carousel',
  templateUrl:'./game-carousel.component.html'
})

export class GameCarouselComponent {
  @Input() title: string;
  @Input() gamesToDisplay;
}
