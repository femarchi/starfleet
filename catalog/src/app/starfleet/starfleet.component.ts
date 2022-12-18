import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription, tap } from 'rxjs';
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
        <p-selectButton
          optionLabel="label"
          optionValue="route"
          [(ngModel)]="activeButtonValue"
          [options]="topBarButtons"
          (onOptionClick)="navigateToStarfleetRoute($event.option.route)"
        ></p-selectButton>
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
  activeButtonValue: StarfleetRoutes = StarfleetRoutes.Home;

  subscription = new Subscription();

  constructor(private router: Router, private route: ActivatedRoute) {
    // ensure the selected button always corresponds to the current route
    this.subscription.add(
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          tap((event) => this.updateActiveButtonValue((<NavigationEnd>event).url))
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public navigateToStarfleetRoute(route: StarfleetRoutes): void {
    this.router.navigate([route], { relativeTo: this.route });
  }

  private updateActiveButtonValue(url: string): void {
    // not the best solution but what we can do for now
    const urlFragments = url.split('/');
    this.activeButtonValue = <StarfleetRoutes>urlFragments[urlFragments.length - 1];
  }
}
