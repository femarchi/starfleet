import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { StarWarsCatalogService } from '../services/star-wars-catalog.service';
import { LazyLoadEvent } from 'primeng/api';
import { Pilot } from '../models/pilot';

@Component({
  selector: 'app-pilots',
  styleUrls: ['pilots.component.scss'],
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
      <ng-template let-pilot pTemplate="gridItem">
        <div class="p-col-12 p-md-4">
          <p-card [header]="pilot.name" [subheader]="pilot.birth_year">
            <ng-template pTemplate="header">
              <div style="padding: 1em">
                <img alt="Card" [src]="pilot.imageUrl" />
              </div>
            </ng-template>
          </p-card>
        </div>
      </ng-template>
    </p-dataView>
  `,
})
export class PilotsComponent {
  rowsPerPage: number = 10;
  modelCount: number = 0;
  models: (Pilot | { imageUrl: string })[] = [];
  loading: boolean = true;

  constructor(private catalogService: StarWarsCatalogService) {}

  private async fetchPage(index: number): Promise<void> {
    this.loading = true;
    const page = await firstValueFrom(this.catalogService.getPilotsPage(index));
    const models = page.results.map(this.toImageModel)
    this.modelCount = page.count;
    this.models = models;
    this.loading = false;
  }

  public onDataViewContentLoad(event: LazyLoadEvent): void {
    // first is incremented by rows, so it will always be divisible
    const first: number = event.first ?? 0;
    const rows: number = event.rows ?? 1;
    const pageIndex: number = first / rows + 1;
    this.fetchPage(pageIndex);
  }

  private toImageModel(pilot: Pilot): Pilot | { imageUrl: string } {
    // replace with search by pilot name in mapping or db
    return {...pilot, imageUrl: 'assets/starwars-placeholder.png'}
  }
}
