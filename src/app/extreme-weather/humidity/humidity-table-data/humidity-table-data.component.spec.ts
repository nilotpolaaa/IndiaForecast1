import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityTableDataComponent } from './humidity-table-data.component';

describe('HumidityTableDataComponent', () => {
  let component: HumidityTableDataComponent;
  let fixture: ComponentFixture<HumidityTableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumidityTableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
