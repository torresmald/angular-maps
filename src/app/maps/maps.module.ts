import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';

import mapboxgl from 'mapbox-gl'
import { AloneComponent } from '../alone/pages/alone/alone.component';


mapboxgl.accessToken = 'pk.eyJ1IjoidG9ycmVzbWFsZCIsImEiOiJjbHZkZnpkYmYwMnB1MmpxYTNrc2Q3NW94In0.7onNYXH6e-Lwg0urAf7UKQ';



@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomPageComponent,
  ],
  imports: [
    SideMenuComponent,
    CommonModule,
    MapsRoutingModule,
    AloneComponent
  ]
})
export class MapsModule { }
