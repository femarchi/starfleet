import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { SelectButtonModule } from 'primeng/selectbutton';

import { StarfleetComponent } from './starfleet.component';

describe('StarfleetComponent', () => {
  let component: StarfleetComponent;
  let fixture: ComponentFixture<StarfleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarfleetComponent],
      imports: [FormsModule, RouterTestingModule, MenubarModule, DataViewModule, SelectButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StarfleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
