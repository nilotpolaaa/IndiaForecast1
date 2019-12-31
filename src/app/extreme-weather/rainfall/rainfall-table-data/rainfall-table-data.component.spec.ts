import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainfallTableDataComponent } from './rainfall-table-data.component';

describe('RainfallTableDataComponent', () => {
  let component: RainfallTableDataComponent;
  let fixture: ComponentFixture<RainfallTableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainfallTableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainfallTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
