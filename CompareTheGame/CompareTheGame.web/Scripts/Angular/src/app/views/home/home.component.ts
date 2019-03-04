import { Component, OnInit } from '@angular/core';

import { DataFactory } from 'src/app/services/DataFactory.service';


@Component({
  selector: '',
  templateUrl:'./home.component.html' 
})

export class HomeComponent implements OnInit {
  constructor(public dataFactory: DataFactory) { };

  games = [];
  gameString = "";


  ngOnInit(): void {
    this.dataFactory.GetRecentlyAdded().subscribe(
      (data) => {
        this.games = data;
        this.gameString = JSON.stringify(data);
      },
      (err) => {
        console.log(err);
      }
      );
    }
}
