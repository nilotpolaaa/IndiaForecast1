import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureTableDataComponent } from './temperature-table-data.component';

describe('TemperatureTableDataComponent', () => {
  let component: TemperatureTableDataComponent;
  let fixture: ComponentFixture<TemperatureTableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureTableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
