import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { PagedCollection } from '../models/paged-collection';
import { Starship } from '../models/starship';

import { StarWarsCatalogService } from './star-wars-catalog.service';

describe('StarWarsCatalogService', () => {
  let service: StarWarsCatalogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StarWarsCatalogService],
    });
    service = TestBed.inject(StarWarsCatalogService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('requests ships page by number', (done) => {
    expect(service).toBeTruthy();
    const pageNumber = 10;
    const pageUrl: string = `https://swapi.dev/api/starships?page=${pageNumber}`;
    const shipsPage: PagedCollection<Starship> = {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
    service.getStarshipPage(10).subscribe((page) => {
      expect(page).toEqual(shipsPage);
      done();
    });
    httpMock.expectOne(pageUrl).flush(shipsPage);
  });
});
