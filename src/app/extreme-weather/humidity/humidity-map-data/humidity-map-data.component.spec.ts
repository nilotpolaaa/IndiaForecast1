import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityMapDataComponent } from './humidity-map-data.component';

describe('HumidityMapDataComponent', () => {
  let component: HumidityMapDataComponent;
  let fixture: ComponentFixture<HumidityMapDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumidityMapDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityMapDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
