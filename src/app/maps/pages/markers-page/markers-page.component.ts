import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface markerColor {
  color: string;
  marker: Marker;
}

interface plainMarker {
  color: string;
  lngLat: number[];
}
@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
})
export class MarkersPageComponent implements AfterViewInit {

  @ViewChild('mapita') public divMap?: ElementRef;

  public zoom: number = 14;
  public map?: Map;
  public lngLat?: LngLat = new LngLat(-3.6795450239783873, 40.189412710967794);
  public markers: markerColor[] = [];
  public color!: string;

  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.readLocalStorage()

  }

  public onCreateMarker() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.color = color;
    this.addMarker(this.lngLat!, color);
  }

  public addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return;
    const marker = new Marker({
      color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);
    this.markers.push({
      color,
      marker: marker,
    });
    this.saveLocalStorage();

    marker.on('dragend', () => this.saveLocalStorage())
  }

  public onDeleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  public onFly(marker: Marker) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
    });
  }

  public saveLocalStorage() {
    const plainMarker: plainMarker[] = this.markers.map(({ color, marker }) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray(),
      };
    });
    localStorage.setItem('marker', JSON.stringify(plainMarker));
  }

  public readLocalStorage() {
    const dataStorage = localStorage.getItem('marker') ?? '[]';
    const plainMarkers: plainMarker[] = JSON.parse(dataStorage)

    plainMarkers.forEach(({color, lngLat}) => {
      const [lng, lat] = lngLat
      const coords = new LngLat(lng, lat)
      this.addMarker(coords, color)
    })
    
  }
}
