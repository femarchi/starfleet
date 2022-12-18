import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarfleetRoutes } from './starfleet-routes';

type TopBarButton = { label: string; route: StarfleetRoutes };

@Component({
  selector: 'app-starfleet',
  styleUrls: ['./starfleet.component.scss'],
  template: `
    <p-menubar styleClass="top-bar">
        <ng-template pTemplate="start">
        <h3 class="app-title">Star Wars Catalog</h3>
        </ng-template>
        <ng-template pTemplate="end">
            <ng-container *ngFor="let button of topBarButtons">
                <button pButton pRipple type="button"
                    class="p-button-text nav-button"
                    [label]="button.label"
                    (click)="navigateToStarfleetRoute(button.route)"
                ></button>
            </ng-container>
        </ng-template>
    </p-menubar>

    <div class="p-grid">
        <div class="p-col-12 content-wrapper">
            <router-outlet></router-outlet>
        </div>
    </div>
  `,
})
export class StarfleetComponent {
  topBarButtons: TopBarButton[] = [
    { label: 'Home', route: StarfleetRoutes.Home },
    { label: 'Ships', route: StarfleetRoutes.Ships },
    { label: 'Pilots', route: StarfleetRoutes.Pilots },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  public navigateToStarfleetRoute(route: StarfleetRoutes): void {
    this.router.navigate([route], { relativeTo: this.route });
  }
}
