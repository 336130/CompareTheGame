import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Vendor } from 'src/app/models/vendor.model';
import { DataFactory } from 'src/app/services/DataFactory.service';

@Component({
  selector: 'edit-vendor-modal',
  templateUrl: './edit-vendor-modal.component.html'
})

export class EditVendorModalComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<EditVendorModalComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private dataFactory: DataFactory) {
    if (data != null && data.Data != null) {
      this.title = "Edit Vendor: " + data.Data.name;
      //make a clean copy of passed in vendor
      this.vendor = JSON.parse(JSON.stringify(data.Data));
      this.isNew = false;
    } else {
      this.title = "New Vendor";
      this.vendor = new Vendor();
      this.isNew = true;
    }
  }

  form: FormGroup;
  title = "";
  vendor: Vendor;
  isNew: boolean;
  errors: string[];
  loading: number = 0;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.vendor.name, Validators.required),
      url: new FormControl(this.vendor.url, Validators.required),
      font: new FormControl(this.vendor.font),
      logoURL: new FormControl(this.vendor.logoURL),
      elementType: new FormControl(this.vendor.elementType),
      elementValue: new FormControl(this.vendor.elementValue)
    })
  }

  CloseModal(): void {
    this.dialogRef.close(false);
  }

  IsValid(): boolean {
//if untouched return immediately.
    if (this.form.pristine) return false;
    
    let errors: string[] = [];

    let vendor: Vendor = this.form.value;

    let valid: boolean = true;
    if (this.vendor) {
      if (!this.isNew) {
        let editFound = false;
        if (vendor.name != this.vendor.name &&
          vendor.font != this.vendor.font &&
          vendor.logoURL != this.vendor.logoURL &&
          vendor.url != this.vendor.url &&
          vendor.elementType != this.vendor.elementType &&
          vendor.elementValue != this.vendor.elementValue) {
          editFound = true;
        }
        valid = editFound;
        errors.push("No changes found.");
      }

      if (!vendor.name) {
        valid = false;
        errors.push('Vendor must have a name.');
      }
      if (!vendor.logoURL && !vendor.font) {
        valid = false;
        errors.push('You must provide either a logoURL or a font in which to display the vendor\'s name.');
      }
      if (vendor.logoURL && (!vendor.logoURL.match(/http/) && !vendor.logoURL.match(/www/))) {
        valid = false;
        errors.push('Logo URL should start with "http://" or "www.".');
      }
      if (!vendor.url) {
        valid = false;
        errors.push('You must provide a vendor home page URL.');
      }
      if (vendor.url && (!vendor.url.match(/http/) && !vendor.logoURL.match(/www/))) {
        valid = false;
        errors.push('Home Page URL should start with "http://" or "www.".');
      }
    } else {
      valid = false;
    }
    this.errors = errors;
    return valid;
  }

  AddOrUpdateVendor() {
    if (this.IsValid()) {
      this.loading++;
      let vendor: Vendor = this.form.value;

      //pass up original values
      vendor.createdBy = this.vendor.createdBy;
      vendor.createdDate = this.vendor.createdDate;
      vendor.vendorID = this.vendor.vendorID;

      this.dataFactory.EditVendor(vendor).subscribe(
        (data) => {
          if (data) {
            this.dialogRef.close(true);
          } else {
            this.errors = ["Error saving vendor."];
          }
        },
        (err) => {
          this.errors = [err.message];
          console.log(err);
        },
        () => {
          this.loading--;
        })
    }
  }
}
