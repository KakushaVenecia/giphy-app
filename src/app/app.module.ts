import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './components/trending/trending.component';
import { ArtistsComponent } from './components/artists/artists.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
