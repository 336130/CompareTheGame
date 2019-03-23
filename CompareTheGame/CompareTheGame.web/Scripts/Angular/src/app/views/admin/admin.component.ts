import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

import { DataFactory } from 'src/app/services/DataFactory.service';

import { Vendor } from 'src/app/models/vendor.model';
import { Game } from 'src/app/models/game.model';
import { EditVendorModalComponent } from 'src/app/components/modals/edit-vendor-modal/edit-vendor-modal.component';
import { DeleteVendorModalComponent } from 'src/app/components/modals/delete-vendor-modal/delete-vendor-modal.component';

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html'
})

export class AdminComponent implements OnInit {
  constructor(private dataFactory: DataFactory,
    private dialog: MatDialog) { }

  loading: number = 0;
  vendors: Vendor[];
  games: Game[];

  editVendorDialogRef: MatDialogRef<EditVendorModalComponent>;
  deleteVendorDialogRef: MatDialogRef<DeleteVendorModalComponent>;

  ngOnInit(): void {
    this.GetGames();
    this.GetVendors();
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

  GetVendors() {
    this.loading++;
    this.dataFactory.GetVendors().subscribe(
      (data) => {
        this.vendors = data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.loading--;
      }
    );
  }

  AddNewVendor = () => {
    const dialogConfig = this.GetDialogConfig();
    this.editVendorDialogRef = this.dialog.open(EditVendorModalComponent, dialogConfig);
    this.editVendorDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.GetVendors();
      }
    })
  }

  EditVendor(vendor: Vendor) {
    const dialogConfig = this.GetDialogConfig(vendor);
    this.editVendorDialogRef = this.dialog.open(EditVendorModalComponent, dialogConfig);
    this.editVendorDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.GetVendors();
      }
    })
  }

  DeleteVendor(vendor: Vendor) {
    const dialogConfig = this.GetDialogConfig(vendor);
    this.deleteVendorDialogRef = this.dialog.open(DeleteVendorModalComponent, dialogConfig);
    this.deleteVendorDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.GetVendors();
      }
    })
  }

  GetDialogConfig(data:any = null): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '700px';
    dialogConfig.height = '500px';
    dialogConfig.position = { top: '100px' };
    dialogConfig.data = { Vendor: data };
    return dialogConfig;
  }
}
