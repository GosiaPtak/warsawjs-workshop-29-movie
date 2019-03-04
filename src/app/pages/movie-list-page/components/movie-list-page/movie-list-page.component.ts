import { Component, OnInit } from '@angular/core';
import { RequestMoviesService } from 'src/app/pages/request-movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss']
})
export class MovieListPageComponent implements OnInit {
  public movieList = [];
  title = 'movies list';
  constructor(private data: RequestMoviesService) {}

  ngOnInit() {
    this.data.fetchList('1').subscribe(res => {
      this.movieList = res;
    });
  }
}
