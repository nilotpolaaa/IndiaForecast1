import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumidityMapDataComponent } from './humidity-map-data/humidity-map-data.component';
import { HumidityTableDataComponent } from './humidity-table-data/humidity-table-data.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HumidityMapDataComponent, HumidityTableDataComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    HumidityMapDataComponent,
    HumidityTableDataComponent
  ]
})
export class HumidityModule { }
