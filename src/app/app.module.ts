import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { HeaderComponent } from './features/header/header.component';
import { TableListComponent } from './features/table-list/table-list.component';
import { MapsComponent } from './features/maps/maps.component';
import { AgGridModule } from 'ag-grid-angular';
import { ClientSideRowModelModule, ModuleRegistry } from 'ag-grid-community';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    TableListComponent,
    MapsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    FormsModule,
		GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}