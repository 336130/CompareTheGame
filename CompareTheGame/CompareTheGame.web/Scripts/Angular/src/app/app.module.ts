import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainMenu } from './components/menu/main-menu.component';
import { Footer } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenu,
    Footer
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule
  ],
  providers: [
    MainMenu,
    Footer
  ],
  entryComponents: [
    MainMenu,
    Footer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
