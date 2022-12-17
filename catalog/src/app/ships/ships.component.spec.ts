import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { Subject } from 'rxjs';
import { PagedCollection } from '../models/paged-collection';
import { Starship } from '../models/starship';
import { StarWarsCatalogService } from '../services/star-wars-catalog.service';

import { ShipsComponent } from './ships.component';

describe('ShipsComponent', () => {
  let component: ShipsComponent;
  let fixture: ComponentFixture<ShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipsComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, DataViewModule, CardModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipsComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('fetches starship page on component initialization', async () => {
    const service = TestBed.inject(StarWarsCatalogService)
    const shipPage$ = new Subject<PagedCollection<Starship>>();
    spyOn(service, 'getStarshipPage').and.returnValue(shipPage$.asObservable());
    fixture.detectChanges();
    let cards: HTMLElement[] = fixture.nativeElement.querySelectorAll('p-dataview p-card');
    shipPage$.next({
      count: 2,
      next: null,
      previous: null,
      results: <Starship[]>[
        {name: 'X-wing', model: 'T-65 X-wing'},
        {name: 'Millenium Falcon', model: 'YT-1300 light freighter'},
      ]
    })
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    cards = fixture.nativeElement.querySelectorAll('p-dataview p-card');
    expect(cards.length).toBe(2);
  });
});
