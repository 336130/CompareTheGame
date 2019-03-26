import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { DataFactory } from 'src/app/services/DataFactory.service';
import { DialogFactory } from 'src/app/services/DialogFactory.service';

import { Vendor } from 'src/app/models/vendor.model';

import { EditVendorModalComponent } from '../modals/edit-vendor-modal/edit-vendor-modal.component';
import { DeleteVendorModalComponent } from '../modals/delete-vendor-modal/delete-vendor-modal.component';


@Component({
  selector: 'admin-vendor-display',
  templateUrl: './admin-vendor-display.component.html'
})

export class AdminVendorDisplayComponent {
  constructor(private dataFactory: DataFactory,
    private dialogFactory: DialogFactory,
    private dialog: MatDialog) { }

  loading: number = 0;
  vendors: Vendor[];
  vendorsToDisplay: Vendor[];

  filterTerm: string = "";
  filterType: string = "";

  editVendorDialogRef: MatDialogRef<EditVendorModalComponent>;
  deleteVendorDialogRef: MatDialogRef<DeleteVendorModalComponent>;


  ngOnInit(): void {
    this.GetVendors();
  }

  GetVendors() {
    this.loading++;
    this.dataFactory.GetVendors().subscribe(
      (data) => {
        this.vendors = data;
        this.ApplyFilters();
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
    const dialogConfig = this.dialogFactory.GetEditDialogConfig();
    this.editVendorDialogRef = this.dialog.open(EditVendorModalComponent, dialogConfig);
    this.editVendorDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.GetVendors();
      }
    })
  }

  EditVendor(vendor: Vendor) {
    const dialogConfig = this.dialogFactory.GetEditDialogConfig(vendor);
    this.editVendorDialogRef = this.dialog.open(EditVendorModalComponent, dialogConfig);
    this.editVendorDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.GetVendors();
      }
    })
  }

  DeleteVendor(vendor: Vendor) {
    const dialogConfig = this.dialogFactory.GetDeleteDialogConfig(vendor);
    this.deleteVendorDialogRef = this.dialog.open(DeleteVendorModalComponent, dialogConfig);
    this.deleteVendorDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.GetVendors();
      }
    })
  }

  ApplyFilters() {
    if (this.vendors && this.vendors.length) {
      let temp: Vendor[] = this.vendors;
      if (this.filterTerm) {
        temp = temp.filter(vendor => {
          return vendor.name.toString().includes(this.filterTerm) ||
            vendor.vendorID.toString().includes(this.filterTerm) ||
            (vendor.font && vendor.font.toString().includes(this.filterTerm)) ||
            (vendor.logoURL && vendor.logoURL.toString().includes(this.filterTerm)) ||
            (vendor.createdBy && vendor.createdBy.toString().includes(this.filterTerm)) ||
            (vendor.modifiedBy && vendor.modifiedBy.toString().includes(this.filterTerm)) ||
            (vendor.elementValue && vendor.elementValue.toString().includes(this.filterTerm)) ||
            (vendor.url && vendor.url.toString().includes(this.filterTerm))})
      }
      if (this.filterType) {
        temp = temp.filter(vendor => {
          return vendor.elementType == this.filterType
        })
      }
      this.vendorsToDisplay = temp;
    }
  }
}
