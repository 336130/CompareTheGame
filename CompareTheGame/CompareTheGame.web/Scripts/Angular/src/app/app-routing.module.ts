import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenu } from './components/menu/main-menu.component';

import { HomeComponent } from './views/home/home.component';
import { GameComponent } from './views/game/game.component';
import { AboutUsComponent } from './views/about/about-us.component';
import { SearchComponent } from './views/search/search.component';

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
    SearchComponent
  ],
  providers: [],
  entryComponents: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
