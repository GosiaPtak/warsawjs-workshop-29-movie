import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsPageComponent } from './components/movie-details-page.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieDetailsPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ]
})
export class MovieDetailsPageModule {}
