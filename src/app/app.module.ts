import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { HeaderComponent } from './features/header/header.component';
import { LoadingSkeletonComponent } from './features/loading-skeleton/loading-skeleton.component';
import { HomeComponent } from './features/home/home.component';
import { TableListComponent } from './features/table-list/table-list.component';
import { MapsComponent } from './features/maps/maps.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelModule, ModuleRegistry } from 'ag-grid-community';


ModuleRegistry.registerModules([ClientSideRowModelModule]);

@NgModule({
  declarations: [
    LoadingSkeletonComponent,
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    TableListComponent,
    MapsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridAngular,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}