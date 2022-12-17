import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'starfleet', pathMatch: 'full' },
  {
    path: 'starfleet',
    loadChildren: () => import('./starfleet/starfleet.module').then(m => m.StarfleetModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
