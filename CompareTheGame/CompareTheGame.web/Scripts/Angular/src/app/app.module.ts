import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainMenu } from './components/menu/main-menu.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenu,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
