import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxGalleryModule } from 'ngx-gallery';

import 'hammerjs';

import { DataFactory } from './services/DataFactory.service';
import { DialogFactory } from './services/DialogFactory.service';

import { HomeComponent } from './views/home/home.component';
import { GameComponent } from './views/game/game.component';
import { AboutUsComponent } from './views/about/about-us.component';
import { SearchComponent } from './views/search/search.component';

import { GameCarouselComponent } from './components/carousel/game-carousel.component';
import { SmallGameDisplayComponent } from './components/game-displays/small-game-display.component';
import { AdminComponent } from './views/admin/admin.component';
import { EditVendorModalComponent } from './components/modals/edit-vendor-modal/edit-vendor-modal.component';
import { DeleteVendorModalComponent } from './components/modals/delete-vendor-modal/delete-vendor-modal.component';
import { EditGameModalComponent } from './components/modals/edit-game-modal/edit-game-modal.component';
import { AdminGameDisplayComponent } from './components/game-displays/admin-game-display.component';
import { AdminVendorDisplayComponent } from './components/vendors/admin-vendor-display.component';

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
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  declarations: [
    AboutUsComponent,
    AdminComponent,
    AdminGameDisplayComponent,
    AdminVendorDisplayComponent,
    EditGameModalComponent,
    EditVendorModalComponent,
    GameCarouselComponent,
    GameComponent,
    HomeComponent,
    SmallGameDisplayComponent,
    DeleteVendorModalComponent,
    SearchComponent,
  ],
  providers: [
    DataFactory,
    DialogFactory,
    GameCarouselComponent,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig 
    },
    EditVendorModalComponent,
    DeleteVendorModalComponent,
    EditGameModalComponent
  ],
  entryComponents: [
    AdminGameDisplayComponent,
    AdminVendorDisplayComponent,
    DeleteVendorModalComponent,
    EditGameModalComponent,
    EditVendorModalComponent,
    GameCarouselComponent,
    SmallGameDisplayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    NgxGalleryModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
