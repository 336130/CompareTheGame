import { Component, Inject } from '@angular/core';
import { DataFactory } from 'src/app/services/DataFactory.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Vendor } from 'src/app/models/vendor.model';

@Component({
  selector: 'delete-vendor-modal',
  templateUrl: 'delete-vendor-modal.component.html'
})

export class DeleteVendorModalComponent {
  constructor(private dataFactory: DataFactory,
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<DeleteVendorModalComponent>) {
    this.vendor = data.Vendor;
    this.dialogRef = dialogRef;
  }

  vendor: Vendor;
  errors: string[] = [];

  CloseModal(): void {
    this.dialogRef.close(false);
  }

  DeleteVendor() {
    this.dataFactory.DeleteVendor(this.vendor).subscribe(
      (data) => {
        this.dialogRef.close(true);
      },
      (err) => {
        this.errors = [err.message];
        console.log(err);
      },
      () => {}
    )
  }
}
