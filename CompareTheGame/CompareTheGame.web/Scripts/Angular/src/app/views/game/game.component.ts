import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFactory } from 'src/app/services/DataFactory.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: '',
  templateUrl: './game.component.html'
})

export class GameComponent implements OnInit {

  game: Game;
  title = "Game page";

  constructor(private route: ActivatedRoute, private dataFactory: DataFactory) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.dataFactory.FetchGame(params.get("game")).subscribe(
        (data) => {
          this.game = data;
          console.log(JSON.stringify(this.game));
        },
        (err) => {
          console.log(err);
        }
      );
    });

   // this.route.queryParamMap.pipe(map())
  }
}
