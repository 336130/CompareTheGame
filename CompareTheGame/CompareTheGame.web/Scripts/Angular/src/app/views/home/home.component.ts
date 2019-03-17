import { Component, OnInit } from '@angular/core';

import { DataFactory } from 'src/app/services/DataFactory.service';
import { HomePageResponse } from 'src/app/models/home-page-response.model';


@Component({
  selector: '',
  templateUrl:'./home.component.html' 
})

export class HomeComponent implements OnInit {
  constructor(public dataFactory: DataFactory) { };

  games: HomePageResponse;
  title = ""

  ngOnInit(): void {
    this.dataFactory.GetHomePageData().subscribe(
      (data) => {
        this.games = data;
      },
      (err) => {
        console.log(err);
      }
      );
    }
}
