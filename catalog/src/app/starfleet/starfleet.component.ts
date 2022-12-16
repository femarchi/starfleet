import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-starfleet',
  templateUrl: './starfleet.component.html',
  styleUrls: ['./starfleet.component.scss'],
})
export class StarfleetComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  public navigateToShips(): void {
    this.router.navigate(['ships'], {relativeTo: this.route})    
  }

  public navigateToPilots(): void {
    this.router.navigate(['pilots'], {relativeTo: this.route})    
  }

  public navigateToDashboard(): void {
    this.router.navigate(['dashboard'], {relativeTo: this.route})    
  }
}
