import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PilotsComponent } from '../pilots/pilots.component';
import { ShipsComponent } from '../ships/ships.component';
import { StarfleetRoutes } from './starfleet-routes';
import { StarfleetComponent } from './starfleet.component';

const routes: Routes = [
  {
    path: '',
    component: StarfleetComponent,
    children: [
      {
        path: '',
        redirectTo: StarfleetRoutes.Home,
        pathMatch: 'full'
      },
      {
        path: StarfleetRoutes.Home,
        component: DashboardComponent
      },
      {
        path: StarfleetRoutes.Ships,
        component: ShipsComponent 
      },
      {
        path: StarfleetRoutes.Pilots,
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
