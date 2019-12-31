import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from '../app-routing.module';
import { DataTabComponent } from './data-tab/data-tab.component';



@NgModule({
  declarations: [FooterComponent, SideNavBarComponent, MapComponent, DataTabComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [FooterComponent, SideNavBarComponent, MapComponent, DataTabComponent]
})
export class SharedModule { }
