import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindSpeedTableDataComponent } from './wind-speed-table-data.component';

describe('WindSpeedTableDataComponent', () => {
  let component: WindSpeedTableDataComponent;
  let fixture: ComponentFixture<WindSpeedTableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindSpeedTableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindSpeedTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
