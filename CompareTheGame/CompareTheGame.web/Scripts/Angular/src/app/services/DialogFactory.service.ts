import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material';

@Injectable()
export class DialogFactory {
  GetEditDialogConfig(data: any = null): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '900px';
    dialogConfig.height = '600px';
    dialogConfig.position = { top: '100px' };
    dialogConfig.data = { Data: data };
    return dialogConfig;
  }


  GetDeleteDialogConfig(data: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '400px';
    dialogConfig.position = { top: '100px' };
    dialogConfig.data = { Data: data };
    return dialogConfig;
  }
}
