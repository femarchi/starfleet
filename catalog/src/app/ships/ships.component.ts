import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Starship } from '../models/starship';
import { StarWarsCatalogService } from '../services/star-wars-catalog.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent {
  rowsPerPage: number = 10;
  modelCount: number = 0;
  models: Starship[] = [];
  loading: boolean = true;

  constructor(private catalogService: StarWarsCatalogService) {}

  private async fetchPage(index: number): Promise<void> {
    this.loading = true;
    const page = await firstValueFrom(this.catalogService.getStarshipPage(index));
    this.modelCount = page.count;
    this.models = page.results;
    this.loading = false;
  }

  public onDataViewContentLoad(event: LazyLoadEvent): void {
    const first: number = event.first ?? 0;
    const rows: number = event.rows ?? 1;
    const pageIndex: number = (first + rows) / rows;
    this.fetchPage(pageIndex);
  }
}
