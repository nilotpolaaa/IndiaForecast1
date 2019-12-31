import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindSpeedMapDataComponent } from './wind-speed-map-data/wind-speed-map-data.component';
import { WindSpeedTableDataComponent } from './wind-speed-table-data/wind-speed-table-data.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WindSpeedMapDataComponent, WindSpeedTableDataComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    WindSpeedMapDataComponent,
    WindSpeedTableDataComponent
  ]
})
export class WindSpeedModule { }
