import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports : [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class ExtremeWeatherModule { }
