import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Starship } from '../models/starship';
import { StarWarsCatalogService } from '../services/star-wars-catalog.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-ships',
  template: `
    <p-dataView
      layout="grid"
      [value]="models"
      [rows]="rowsPerPage"
      [paginator]="true"
      [totalRecords]="modelCount"
      [lazy]="true"
      [loading]="loading"
      (onLazyLoad)="onDataViewContentLoad($event)"
    >
      <ng-template let-ship pTemplate="gridItem">
        <div class="p-col-12 p-md-4">
          <p-card [header]="ship.name" [subheader]="ship.model">
            <ng-template pTemplate="header">
              <div style="padding: 1em">
                <img alt="Card" [src]="getShipImageFilePath(ship.name)">
              </div>
            </ng-template>
          </p-card>
        </div>
      </ng-template>
    </p-dataView>
  `,
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
    // first is incremented by rows, so it will always be divisible
    const first: number = event.first ?? 0;
    const rows: number = event.rows ?? 1;
    const pageIndex: number = first / rows + 1;
    this.fetchPage(pageIndex);
  }

  public getShipImageFilePath(shipName: Pick<Starship, 'name'>): string {
    // replace with search by shipName in mapping or db
    return 'assets/starwars-placeholder.png'
  }
}
