import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxGalleryModule } from 'ngx-gallery';

import 'hammerjs';

import { HomeComponent } from './views/home/home.component';
import { GameComponent } from './views/game/game.component';
import { AboutUsComponent } from './views/about/about-us.component';
import { SearchComponent } from './views/search/search.component';

import { DataFactory } from './services/DataFactory.service';
import { GameCarouselComponent } from './components/carousel/game-carousel.component';

class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // override hammerjs default configuration
    'pan': { threshold: 5 },
    'swipe': {
      velocity: 0.4,
      threshold: 20,
      direction: 31 // /!\ ugly hack to allow swipe in all direction
    }
  }
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    AboutUsComponent,
    SearchComponent,
    GameCarouselComponent
  ],
  providers: [
    DataFactory,
    GameCarouselComponent,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig 
    }
  ],
  entryComponents: [
    GameCarouselComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    NgxGalleryModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
