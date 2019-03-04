import { Component, OnInit } from '@angular/core';
import {
  RequestMoviesService,
  FetchMovieResponseBody
} from 'src/app/pages/request-movies.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss']
})
export class MovieDetailsPageComponent implements OnInit {
  public id;
  public movieDetails: FetchMovieResponseBody = null;
  title = 'movies details';
  constructor(
    private route: ActivatedRoute,
    private data: RequestMoviesService
  ) {
    this.route.params.subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    this.data.fetchMovie(this.id).subscribe(res => {
      this.movieDetails = res;
    });
  }
}
