import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavBarComponent } from './shared/side-nav-bar/side-nav-bar.component';
import { WindSpeedTableDataComponent } from './extreme-weather/wind-speed/wind-speed-table-data/wind-speed-table-data.component';
import { HumidityTableDataComponent } from './extreme-weather/humidity/humidity-table-data/humidity-table-data.component';
import { RainfallTableDataComponent } from './extreme-weather/rainfall/rainfall-table-data/rainfall-table-data.component';
import { TemperatureTableDataComponent } from './extreme-weather/temperature/temperature-table-data/temperature-table-data.component';


const routes: Routes = [
  { path : '', component: FooterComponent, outlet : 'footer'},
  { path : '', component: SideNavBarComponent, outlet: 'sidenavbar'},
  { path : 'extremeweather', component: RainfallTableDataComponent},
  { path : 'extremeweather/rainfall', component: RainfallTableDataComponent},
  { path : 'extremeweather/humidity', component: HumidityTableDataComponent},
  { path : 'extremeweather/temperature', component: TemperatureTableDataComponent},
  { path : 'extremeweather/windspeed', component: WindSpeedTableDataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
