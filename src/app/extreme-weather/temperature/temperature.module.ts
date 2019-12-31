import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureMapDataComponent } from './temperature-map-data/temperature-map-data.component';
import { TemperatureTableDataComponent } from './temperature-table-data/temperature-table-data.component';



@NgModule({
  declarations: [TemperatureMapDataComponent, TemperatureTableDataComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TemperatureMapDataComponent,
    TemperatureTableDataComponent
  ]
})
export class TemperatureModule { }
