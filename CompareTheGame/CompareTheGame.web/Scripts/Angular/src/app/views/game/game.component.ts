import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFactory } from 'src/app/services/DataFactory.service';
import { Game } from 'src/app/models/game.model';
import { NgxGalleryAnimation, NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { PriceHistory } from 'src/app/models/price-history.model';

@Component({
  selector: '',
  templateUrl: './game.component.html'
})

export class GameComponent implements OnInit {

  game: Game;
  loading: boolean = false;
  summaryCollapsed: boolean = true;
  storyLineCollapsed: boolean = true;
  todaysPrices: [][];

  galleryImages: NgxGalleryImage[];
  galleryOptions: NgxGalleryOptions[] = [
    {
      width:'100%',
      height: '300px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
      breakpoint: 800,
      width: '100%',
      height: '400px',
    },
    // max-width 400
    {
      breakpoint: 400,
      preview: false
    }
  ];

  constructor(private route: ActivatedRoute, private dataFactory: DataFactory) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.route.queryParamMap.subscribe(params => {
      this.dataFactory.FetchGame(params.get("game")).subscribe(
        (data) => {
          this.game = data;
          this.FormatPageData();
        },
        (err) => {
          console.log(err);
        }, () => {
          this.loading = false;
        }
      );
    });
  }

  FormatPageData() {
    if (this.game) {
      this.galleryImages = [];
      this.game.screenshots.forEach(screenshot => {
        this.galleryImages.push({
          small: screenshot.url,
          medium: screenshot.url,
          big: screenshot.url
        });
      });
      if (this.game.todaysPrices && this.game.todaysPrices.length) {
        this.todaysPrices = this.FormatPriceHistoryToConsoles(this.game.todaysPrices);
      }
    }
  }

  FormatPriceHistoryToConsoles(prices: PriceHistory[]) {
    var grouped = {}, retVal = [];
    prices.forEach(price => {
      (grouped[price.platform.name] = grouped[price.platform.name] || []).push(price);
    })

    for (var key in grouped) {
      retVal.push(grouped[key]);
    }

    return retVal;;
  }
}
