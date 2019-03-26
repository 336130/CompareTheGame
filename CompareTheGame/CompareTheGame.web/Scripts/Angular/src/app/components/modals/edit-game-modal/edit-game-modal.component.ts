import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Game } from 'src/app/models/game.model';
import { DataFactory } from 'src/app/services/DataFactory.service';

@Component({
  selector: 'edit-game',
  templateUrl: './edit-game-modal.component.html'
})

export class EditGameModalComponent {
  constructor(private dataFactory: DataFactory,
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<EditGameModalComponent>)
  {
    this.game = JSON.parse(JSON.stringify(data.Data));
  }

  game: Game;

  CloseModal() {
    this.dialogRef.close();
  }
}
