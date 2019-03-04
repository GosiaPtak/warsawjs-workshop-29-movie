import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListPageComponent } from './components/movie-list-page/movie-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [MovieListPageComponent],
  imports: [CommonModule, HttpClientModule, MatCardModule]
})
export class MovieListPageModule {}
