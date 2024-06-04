import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl'


@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('mapita') public map?: ElementRef

  ngAfterViewInit(): void {    
    const map = new Map({
      container: this.map?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [ -3.6795450239783873, 40.189412710967794], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });
  }
}
