import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl'

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {

  @Input() public lngLat?: [number, number]
  @ViewChild('mapita') public map?: ElementRef


  ngAfterViewInit(): void {
      if(!this.lngLat) throw 'Lng Cant be null'
      if(!this.map) throw 'Map cant  null'
      
      const color = '#xxxxxx'.replace(/x/g, (y) =>
        ((Math.random() * 16) | 0).toString(16)
      );
      const [lng, lat] = this.lngLat

      const map = new Map({
        container: this.map?.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [lng,lat], // starting position [lng, lat]
        zoom: 12, // starting zoom,
        dragPan: false
      });

        const marker = new Marker({
          color,
          draggable: false,
        })
          .setLngLat(this.lngLat)
          .addTo(map);
        
    
      

  }
}
