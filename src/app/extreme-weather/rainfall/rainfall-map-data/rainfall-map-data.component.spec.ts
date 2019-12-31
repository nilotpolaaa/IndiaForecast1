import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainfallMapDataComponent } from './rainfall-map-data.component';

describe('RainfallMapDataComponent', () => {
  let component: RainfallMapDataComponent;
  let fixture: ComponentFixture<RainfallMapDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainfallMapDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainfallMapDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
