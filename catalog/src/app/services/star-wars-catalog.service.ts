import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Endpoints } from '../endpoints';
import { EntityCollection } from '../models/entity-collection';
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

  public getStarshipCollection(): Observable<Starship[]> {
    const url = `${SWAPI_BASE_URL}${Endpoints.Starships}`;
    return this.http.get<EntityCollection<Starship>>(url).pipe(
      map(response => response.results),
    );
  }

}
