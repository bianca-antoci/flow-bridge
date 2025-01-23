import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SensorDataModel } from "../features/table-list/table-list.model";

@Injectable({
  providedIn: "root",
})
export class APIService {
  private dataUrl = "assets/data/sensor_readings.json";

  constructor(private http: HttpClient) {}

  // Retrieve the sensor data
  public getSensorData(): Observable<SensorDataModel[]> {
    return this.http.get<SensorDataModel[]>(this.dataUrl);
  }

  // Example: Send new sensor data to the server and receive the updated list
  public addSensorData(
    newData: SensorDataModel
  ): Observable<SensorDataModel[]> {
    return this.http.post<SensorDataModel[]>(this.dataUrl, newData);
  }
}
