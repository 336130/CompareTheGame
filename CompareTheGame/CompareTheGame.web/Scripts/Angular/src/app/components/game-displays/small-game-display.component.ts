import { Component,Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'small-game-display',
  templateUrl: 'small-game-display.component.html'
})

export class SmallGameDisplay {
  @Input() game: Game;
}
