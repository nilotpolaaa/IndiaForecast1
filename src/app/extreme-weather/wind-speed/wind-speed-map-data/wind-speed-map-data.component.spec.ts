import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindSpeedMapDataComponent } from './wind-speed-map-data.component';

describe('WindSpeedMapDataComponent', () => {
  let component: WindSpeedMapDataComponent;
  let fixture: ComponentFixture<WindSpeedMapDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindSpeedMapDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindSpeedMapDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
