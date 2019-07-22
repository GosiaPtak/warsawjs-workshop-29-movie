import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface FetchListResponseBody {
  id: string;
  title: string;
  rating: number;
  votes: number;
  posterSrc: string;
  genres: Array<string>;
  releaseDate: string;
}

export interface FetchMovieResponseBody {
  id: string;
  title: string;
  budget: number;
  description: string;
  rating: number;
  votes: number;
  posterSrc: string;
  homepage?: string;
  genres: Array<string>;
  duration: number;
  videos: Array<{
    name: string;
    size: number;
    type: string;
    url: string;
  }>;
}

const API_URL = 'http://gosiaptak.cba.pl/movies.json';
const API_METHODS = {
  fetchList: `${API_URL}/list/:page`,
  fetchMovie: `${API_URL}/movie/:id`
};

@Injectable({
  providedIn: 'root'
})
export class RequestMoviesService {
  constructor(private http: HttpClient) {}

  public fetchList(page = '1'): Observable<Array<FetchListResponseBody>> {
    return this.makeRequest(API_METHODS.fetchList, {
      page
    });
  }

  public fetchMovie(id: string): Observable<FetchMovieResponseBody> {
    return this.makeRequest(API_METHODS.fetchMovie, {
      id
    });
  }

  private makeRequest<T>(url, params = {}): Observable<T> {
    console.log(2, url);
    Object.entries(params).forEach(([key, value]) => {
      url = url.replace(`:${key}`, value);
      console.log(1, url);
    });
    return this.http.get<T>(url);
  }
}
