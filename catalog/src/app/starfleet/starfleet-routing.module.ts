import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PilotsComponent } from '../pilots/pilots.component';
import { ShipsComponent } from '../ships/ships.component';
import { StarfleetComponent } from './starfleet.component';

const routes: Routes = [
  {
    path: '',
    component: StarfleetComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'ships',
        component: ShipsComponent 
      },
      {
        path: 'pilots',
        component: PilotsComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarfleetRoutingModule { }
