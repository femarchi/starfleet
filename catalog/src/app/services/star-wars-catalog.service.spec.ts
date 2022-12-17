import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';

import { StarWarsCatalogService } from './star-wars-catalog.service';

describe('StarWarsCatalogService', () => {
  let service: StarWarsCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StarWarsCatalogService]
    });
    service = TestBed.inject(StarWarsCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
