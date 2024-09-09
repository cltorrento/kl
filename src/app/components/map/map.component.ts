import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map: any;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }

  customIcon = L.icon({
    iconUrl: 'assets/resource/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  private initMap(): void {
    this.map = L.map('map').setView([45.4641013, 9.1893516], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    L.marker([45.4641013, 9.1893516], { icon: this.customIcon }).addTo(
      this.map
    );
  }
}
