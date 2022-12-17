import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Starship } from '../models/starship';
import { StarWarsCatalogService } from '../services/star-wars-catalog.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  models: Starship[] = [];

  constructor(private catalogService: StarWarsCatalogService) {}

  ngOnInit(): void {
    this.fetchModels();
  }

  private async fetchModels(): Promise<void> {
    this.models = await firstValueFrom(this.catalogService.getStarshipCollection());
  }
  
}
