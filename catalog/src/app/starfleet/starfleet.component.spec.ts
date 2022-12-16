import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarfleetComponent } from './starfleet.component';

describe('StarfleetComponent', () => {
  let component: StarfleetComponent;
  let fixture: ComponentFixture<StarfleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarfleetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarfleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
