import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';
import { MovieListPageModule } from './pages/movie-list-page/movie-list-page.module';
import { SearchPageModule } from './pages/search-page/search-page.module';
import { ContactPageModule } from './pages/contact-page/contact-page.module';
import { MovieDetailsPageModule } from 'src/app/pages/movie-list-page/components/movie-details-page/movie-details-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MovieListPageModule,
    SearchPageModule,
    ContactPageModule,
    MovieDetailsPageModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatButtonModule]
})
export class AppModule {}
