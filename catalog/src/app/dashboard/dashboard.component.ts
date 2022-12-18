import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarfleetRoutes } from '../starfleet/starfleet-routes';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <div class="dashboard-wrapper">
      <div class="dashboard-content p-grid">
        <div class="p-col-12 dashboard-title">
          <h1>Welcome to the Star Wars Catalog</h1>
        </div>
        <div class="p-col-12 dashboard-buttons">
          <p-button label="Ships" (onClick)="navigateToShips()"></p-button>
          <p-button label="Pilots" (onClick)="navigateToPilots()"></p-button>
        </div>
      </div>
    </div>
  `,
})
export class DashboardComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  public navigateToShips(): void {
    this.router.navigate(['..', StarfleetRoutes.Ships], { relativeTo: this.route });
  }

  public navigateToPilots(): void {
    this.router.navigate(['..', StarfleetRoutes.Pilots], { relativeTo: this.route });
  }
}
