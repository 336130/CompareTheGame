import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

import { DataFactory } from 'src/app/services/DataFactory.service';
import { Genre } from 'src/app/models/genre.model';
import { Theme } from 'src/app/models/theme.model';
import { Perspective } from 'src/app/models/perspective.model';
import { Mode } from 'src/app/models/mode.model';
import { Platform } from 'src/app/models/platform.model';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: '',
  templateUrl: './search.component.html',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})

export class SearchComponent implements OnInit {
  constructor(private dataFactory: DataFactory) {
  }

  loading: boolean = false;
  showFilters: boolean = false;

  genres: Genre[];
  themes: Theme[];
  perspectives: Perspective[];
  modes: Mode[];
  platforms: Platform[];

  // user input
  gameName: string = "";
  selectedGenre: string = "0";
  selectedTheme: string = "0";
  selectedPerspective: string = "0";
  selectedMode: string = "0";
  selectedPlatform: string = "0";

  searchResults: Game[] = [];
  gamesToDisplay: Game[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.dataFactory.GetSearchOptions().subscribe(
      (data) => {
        this.genres = data.genres;
        this.themes = data.themes;
        this.perspectives = data.perspectives;
        this.modes = data.modes;
        this.platforms = data.platforms;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.loading = false;
      }
    )
  }

  SearchForGame(): void {
    this.dataFactory.SearchForGame(this.gameName).subscribe(
      (data) => {
        this.searchResults = data;
        this.ApplyFilters();
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.loading = true;
      }
    );
  }

  ApplyFilters(): void {
    let temp: Game[] = this.searchResults;
    if (this.searchResults && this.searchResults.length) {
      temp = parseInt(this.selectedTheme) ? temp.filter(g => g.themes.map(t => t.themeID).includes(parseInt(this.selectedTheme))) : temp;
      temp = parseInt(this.selectedPlatform) ? temp.filter(g => g.platforms.map(t => t.platformID).includes(parseInt(this.selectedPlatform))) : temp;
      temp = parseInt(this.selectedPerspective) ? temp.filter(g => g.perspectives.map(p => p.perspectiveID).includes(parseInt(this.selectedPerspective))) : temp;
      temp = parseInt(this.selectedMode) ? temp.filter(g => g.modes.map(m => m.modeID).includes(parseInt(this.selectedMode))) : temp;
      temp = parseInt(this.selectedGenre) ? temp.filter(g => g.genres.map(g => g.genreID).includes(parseInt(this.selectedGenre))) : temp;
    }
    this.gamesToDisplay = temp;
  }
}
