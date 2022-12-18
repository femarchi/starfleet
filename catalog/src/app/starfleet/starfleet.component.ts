import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarfleetRoutes } from './starfleet-routes';

type TopBarButton = { label: string; command: () => void };

@Component({
  selector: 'app-starfleet',
  templateUrl: './starfleet.component.html',
  styleUrls: ['./starfleet.component.scss'],
})
export class StarfleetComponent {
  topBarButtons: TopBarButton[] = [
    { label: 'Home', command: () => this.navigateToStarfleetRoute(StarfleetRoutes.Home) },
    { label: 'Ships', command: () => this.navigateToStarfleetRoute(StarfleetRoutes.Ships) },
    { label: 'Pilots', command: () => this.navigateToStarfleetRoute(StarfleetRoutes.Pilots) },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  private navigateToStarfleetRoute(route: StarfleetRoutes): void {
    this.router.navigate([route], { relativeTo: this.route });
  }
}
