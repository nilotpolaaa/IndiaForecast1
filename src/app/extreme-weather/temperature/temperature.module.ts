import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureMapDataComponent } from './temperature-map-data/temperature-map-data.component';
import { TemperatureTableDataComponent } from './temperature-table-data/temperature-table-data.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TemperatureMapDataComponent, TemperatureTableDataComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    TemperatureMapDataComponent,
    TemperatureTableDataComponent
  ]
})
export class TemperatureModule { }
