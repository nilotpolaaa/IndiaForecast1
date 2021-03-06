import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RainfallMapDataComponent } from './rainfall-map-data/rainfall-map-data.component';
import { RainfallTableDataComponent } from './rainfall-table-data/rainfall-table-data.component';
import { RouterModule } from '@angular/router';
import { CommonHttpService } from './common-http.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [RainfallMapDataComponent, RainfallTableDataComponent],
  imports: [
    CommonModule, RouterModule,
    SharedModule
  ],
  exports: [RainfallMapDataComponent, RainfallTableDataComponent],
  providers: [CommonHttpService]
})
export class RainfallModule { }
