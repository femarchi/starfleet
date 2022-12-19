import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { Subject } from 'rxjs';
import { PagedCollection } from '../models/paged-collection';
import { Pilot } from '../models/pilot';
import { StarWarsCatalogService } from '../services/star-wars-catalog.service';

import { PilotsComponent } from './pilots.component';

describe('PilotsComponent', () => {
  let component: PilotsComponent;
  let fixture: ComponentFixture<PilotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotsComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, DataViewModule, CardModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('fetches pilots page on component initialization', async () => {
    const service = TestBed.inject(StarWarsCatalogService)
    const pilotsPage$ = new Subject<PagedCollection<Pilot>>();
    spyOn(service, 'getPilotsPage').and.returnValue(pilotsPage$.asObservable());
    fixture.detectChanges();
    let cards: HTMLElement[] = fixture.nativeElement.querySelectorAll('p-dataview p-card');
    pilotsPage$.next({
      count: 1,
      next: null,
      previous: null,
      results: <Pilot[]>[
        {name: "Luke Skywalker", birth_year: "19 BBY"},
      ]
    })
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    cards = fixture.nativeElement.querySelectorAll('p-dataview p-card');
    expect(cards.length).toBe(1);
  });
});
