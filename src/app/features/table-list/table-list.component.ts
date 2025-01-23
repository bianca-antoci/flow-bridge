import { Component, OnInit } from "@angular/core";
import { ColDef } from "ag-grid-community";


@Component({
	selector: "table-list",
	styleUrls: ["./table-list.component.scss"],
	templateUrl: "./table-list.component.html",
})
export class TableListComponent implements OnInit {


	constructor() { }

	ngOnInit() { }
	columnDefs: ColDef[] = [
		{ headerName: 'Make', field: 'make' },
		{ headerName: 'Model', field: 'model' },
		{ headerName: 'Price', field: 'price' },
		{ headerName: 'Year', field: 'year' },
		{ headerName: 'Color', field: 'color' },
		{ headerName: 'Country', field: 'country' }
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000, year: 2021, color: 'Red', country: 'Japan' },
		{ make: 'Ford', model: 'Mondeo', price: 32000, year: 2020, color: 'Blue', country: 'USA' },
		{ make: 'Porsche', model: 'Boxster', price: 72000, year: 2019, color: 'Yellow', country: 'Germany' },
		{ make: 'Tesla', model: 'Model S', price: 85000, year: 2022, color: 'Black', country: 'USA' },
		{ make: 'BMW', model: 'M3', price: 67000, year: 2021, color: 'White', country: 'Germany' },
		{ make: 'Honda', model: 'Civic', price: 25000, year: 2020, color: 'Silver', country: 'Japan' }
	];






}
