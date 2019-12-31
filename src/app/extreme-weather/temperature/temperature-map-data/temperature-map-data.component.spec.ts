import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureMapDataComponent } from './temperature-map-data.component';

describe('TemperatureMapDataComponent', () => {
  let component: TemperatureMapDataComponent;
  let fixture: ComponentFixture<TemperatureMapDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureMapDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureMapDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
