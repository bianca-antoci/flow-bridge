import { Component, OnDestroy, OnInit } from "@angular/core";
import { ColDef, GridOptions } from "ag-grid-community";
import { APIService } from "src/app/services/api.service";
import { SensorDataModel } from "./table-list.model";
import { Subject, takeUntil } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
  selector: "table-list",
  styleUrls: ["./table-list.component.scss"],
  templateUrl: "./table-list.component.html",
})
export class TableListComponent implements OnInit, OnDestroy {
  public isModalVisible: boolean = false;
  public newSensor: SensorDataModel = new SensorDataModel();
  public rowData: SensorDataModel[] = [];
  public gridOptions: GridOptions;

  public columnDefs: ColDef[] = [
    {
      headerName: "Id",
      field: "id",
      maxWidth: 150,
    },
    { headerName: "Box Id", field: "box_id" },
    { headerName: "Sensor Type", field: "sensor_type" },
    { headerName: "Unit", field: "unit" },
    { headerName: "Range L", field: "range_l" },
    { headerName: "Range U", field: "range_u" },
    { headerName: "Longitude", field: "longitude" },
    { headerName: "Latitude", field: "latitude" },
    { headerName: "Reading", field: "reading" },
    { headerName: "Reading ts", field: "reading_ts" },
  ];

  public defaultColDef = {
    sortable: true,
  };

  private destroy$ = new Subject<void>(); // This create a Subject to signal component destruction

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.apiService
      .getSensorData()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (entries: SensorDataModel[]) => (this.rowData = entries),
      });
  }

  /**
   * Displays the modal dialog to the user.
   */
  public showModal(): void {
    this.isModalVisible = true;
  }

  /**
   * Hides the modal dialog from the user.
   */
  public closeModal(): void {
    this.isModalVisible = false;
  }

  public onSubmit(form: NgForm): void {
    if (form.valid) {
      this.addReading();
    }
  }

  /**
   * Adds the current sensor data to the list and then closes the modal.
   */
  private addReading(): void {
    // Append the new sensor data to rowData
    this.rowData = [...this.rowData, { ...this.newSensor }];

    // Reset the newSensor object to prepare for the next input
    this.newSensor = new SensorDataModel();

    this.closeModal();
  }

  ngOnDestroy(): void {
    // Emit a value to signal completion
    this.destroy$.next();
    this.destroy$.complete();
  }
}
