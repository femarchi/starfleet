import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  public getStarshipPage(index: number = 1): Observable<PagedCollection<Starship>> {
    const url = `${SWAPI_BASE_URL}${Endpoints.Starships}/?page=${index}`;
    return this.http.get<PagedCollection<Starship>>(url);
  }

}
