import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {LngLat, Map} from 'mapbox-gl'

@Component({
  selector: 'app-zoom-page',
  templateUrl: './zoom-page.component.html',
  styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapita') public divMap?: ElementRef
  
  public zoom: number = 12
  public map?: Map
  public lngLat?: LngLat = new LngLat( -3.6795450239783873, 40.189412710967794)
  
  ngAfterViewInit(): void {    
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.listenersMap()
  }
  ngOnDestroy(): void {
    this.map?.remove()
  }

  onChangeZoom(method: string){
    method === 'minus' ? this.map!.zoomOut() : this.map!.zoomIn()
  }

  public listenersMap(){
    this.map?.on('zoom', (event) => {
      if(this.map)
      this.zoom = this.map?.getZoom()
    })

    this.map?.on('move', () => {
      this.lngLat = this.map?.getCenter()
    })
  }

  public zoomChanged(value: string){
    console.log(value);
    this.map?.zoomTo(Number(value))
  }
}
