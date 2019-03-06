import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { HomeComponent } from './views/home/home.component';
import { GameComponent } from './views/game/game.component';
import { AboutUsComponent } from './views/about/about-us.component';
import { SearchComponent } from './views/search/search.component';

import { DataFactory } from './services/DataFactory.service';
import { CarouselComponent } from './components/carousel/carousel.component';

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
    CarouselComponent
  ],
  providers: [
    DataFactory,
    CarouselComponent
  ],
  entryComponents: [
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
