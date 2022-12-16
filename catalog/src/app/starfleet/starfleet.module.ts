import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarfleetRoutingModule } from './starfleet-routing.module';
import { StarfleetComponent } from './starfleet.component';
import { MenubarModule } from 'primeng/menubar'
import { ButtonModule } from 'primeng/button'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PilotsComponent } from '../pilots/pilots.component';
import { ShipsComponent } from '../ships/ships.component';


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
  ]
})
export class StarfleetModule { }
