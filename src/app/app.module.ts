import { YoutubeSearchService, YOUTUBE_API_KEY, YOUTUBE_API_URL } from './youtube-search.service';
import { SearchFormComponent } from './search-form/search-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponentComponent } from './search-component/search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchResultComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    YoutubeSearchService,
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
