import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from '../endpoints';
import { PagedCollection } from '../models/paged-collection';
import { Starship } from '../models/starship';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

/**
 * Common service for handling SWAPI requests
 */
@Injectable({
  providedIn: 'root',
})
export class StarWarsCatalogService {
  constructor(private http: HttpClient) {}

  /**
   * Request the starships paged collection from the API
   */
  public getStarshipPage(page: number = 1): Observable<PagedCollection<Starship>> {
    const url: string = `${SWAPI_BASE_URL}${Endpoints.Starships}`;
    return this.http.get<PagedCollection<Starship>>(url, { params: { page: page } });
  }
}
