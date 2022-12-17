import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarfleetRoutingModule } from './starfleet-routing.module';
import { StarfleetComponent } from './starfleet.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PilotsComponent } from '../pilots/pilots.component';
import { ShipsComponent } from '../ships/ships.component';
import { StarWarsCatalogService } from '../services/star-wars-catalog.service';

@NgModule({
  declarations: [
    StarfleetComponent,
    DashboardComponent,
    PilotsComponent,
    ShipsComponent,
  ],
  imports: [
    CommonModule,
    StarfleetRoutingModule,
    MenubarModule,
    ButtonModule,
    DataViewModule,
    CardModule,
  ],
  providers: [StarWarsCatalogService],
})
export class StarfleetModule {}
