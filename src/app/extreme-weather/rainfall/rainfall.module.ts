import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RainfallMapDataComponent } from './rainfall-map-data/rainfall-map-data.component';
import { RainfallTableDataComponent } from './rainfall-table-data/rainfall-table-data.component';



@NgModule({
  declarations: [RainfallMapDataComponent, RainfallTableDataComponent],
  imports: [
    CommonModule
  ],
  exports: [RainfallMapDataComponent, RainfallTableDataComponent]
})
export class RainfallModule { }
