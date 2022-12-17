import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';

import { StarfleetComponent } from './starfleet.component';

describe('StarfleetComponent', () => {
  let component: StarfleetComponent;
  let fixture: ComponentFixture<StarfleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarfleetComponent],
      imports: [RouterTestingModule, MenubarModule, DataViewModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StarfleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
