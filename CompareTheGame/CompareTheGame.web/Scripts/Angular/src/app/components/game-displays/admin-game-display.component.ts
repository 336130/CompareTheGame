import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

import { EditGameModalComponent } from '../modals/edit-game-modal/edit-game-modal.component';

import { DataFactory } from 'src/app/services/DataFactory.service';
import { Game } from 'src/app/models/game.model';
import { DialogFactory } from 'src/app/services/DialogFactory.service';

@Component({
  selector: 'admin-game-display',
  templateUrl: './admin-game-display.component.html'
})

export class AdminGameDisplayComponent implements OnInit {
  constructor(private dataFactory: DataFactory,
    private dialogFactory: DialogFactory,
    private dialog: MatDialog) {

  }

  games: Game[];
  loading: number = 0;

  editGameDialogRef: MatDialogRef<EditGameModalComponent>;

  ngOnInit(): void {
    this.GetGames();
  }


  GetGames() {
    this.loading++;
    this.dataFactory.GetAllGames().subscribe(
      (data) => {
        this.games = data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.loading--;
      }
    );
  }


  EditGame(game: Game) {
    const dialogConfig = this.dialogFactory.GetEditDialogConfig(game);
    this.editGameDialogRef = this.dialog.open(EditGameModalComponent, dialogConfig);
    this.editGameDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.GetGames();
      }
    })
  }


}
