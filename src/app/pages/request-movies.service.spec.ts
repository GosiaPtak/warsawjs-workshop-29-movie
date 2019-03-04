import { TestBed } from '@angular/core/testing';

import { RequestMoviesService } from './request-movies.service';

describe('RequestMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestMoviesService = TestBed.get(RequestMoviesService);
    expect(service).toBeTruthy();
  });
});
