import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ExtremeWeatherModule } from './extreme-weather/extreme-weather.module';
import { HumidityModule } from './extreme-weather/humidity/humidity.module';
import { TemperatureModule } from './extreme-weather/temperature/temperature.module';
import { WindSpeedModule } from './extreme-weather/wind-speed/wind-speed.module';
import { RainfallModule } from './extreme-weather/rainfall/rainfall.module';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
import { AngularSplitModule } from 'angular-split';
import { HttpClientModule } from '@angular/common/http';
import { CommonHttpService } from './extreme-weather/rainfall/common-http.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ExtremeWeatherModule,
    RainfallModule,
    HumidityModule,
    TemperatureModule,
    WindSpeedModule,
    SplitterModule, 
    AngularSplitModule,
    HttpClientModule
  ],
  providers: [CommonHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
