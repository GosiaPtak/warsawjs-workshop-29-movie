import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { AppComponent } from 'src/app/app.component';
import { MovieListPageComponent } from './pages/movie-list-page/components/movie-list-page/movie-list-page.component';
import { SearchPageComponent } from 'src/app/pages/search-page/components/search-page.component';
import { ContactPageComponent } from 'src/app/pages/contact-page/components/contact-page.component';
import { MovieDetailsPageComponent } from './pages/movie-list-page/components/movie-details-page/components/movie-details-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movie'
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsPageComponent
  },
  {
    path: 'movie',
    component: MovieListPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
