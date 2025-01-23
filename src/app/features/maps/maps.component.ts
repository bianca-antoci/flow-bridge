import { APIService } from "src/app/services/api.service";
import { CustomMapMarker } from "./custom-marker.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "flb-maps",
  styleUrls: ["./maps.component.scss"],
  templateUrl: "./maps.component.html",
})
export class MapsComponent implements OnInit {
  // TODO: calculate the center based on values from the API
  center: google.maps.LatLngLiteral = { lat: 51.51885, lng: -0.06507 };
  markers: CustomMapMarker[] = [];
  zoom = 8;

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.apiService.getSensorData().subscribe({
      // The number of entries is large and it blocks the UI thread,
      // So we pick the first 100 elements until we can introduce some lazy loading
      next: (entries) => {
        const limitedEntries = entries.slice(0, 100);
        this.markers = limitedEntries
          .map((entry) => {
            const marker: CustomMapMarker = {
              position: { lat: entry.latitude, lng: entry.longitude },
              title: entry.id,
              label: entry.sensor_type,
              id: entry.id,
            };
            return marker;
          })
          .filter(
            (marker) =>
              !isNaN(marker.position.lat) && !isNaN(marker.position.lng)
          );
      },
    });
  }
}
