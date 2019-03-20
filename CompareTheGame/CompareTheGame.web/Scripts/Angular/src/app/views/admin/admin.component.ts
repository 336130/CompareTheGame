import { Component, OnInit } from '@angular/core';

import { DataFactory } from 'src/app/services/DataFactory.service';

import { Vendor } from 'src/app/models/vendor.model';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html'
})

export class AdminComponent implements OnInit {
  constructor(private dataFactory: DataFactory) {}

  loading: boolean = false;
  vendors: Vendor[];
  games: Game[];

  newVendor: Vendor = new Vendor();

  ngOnInit(): void {
    this.loading = true;
    this.dataFactory.GetVendors().subscribe(
      (data) => {
        this.vendors = data;
      },
      (err) => {
        console.log(err);
      },
      () => { this.loading = false }
    )
    this.dataFactory.GetAllGames().subscribe(
      (data) => {
        this.games = data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.loading = false;
      }
    )
  }


}
