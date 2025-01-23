import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TableListComponent } from './features/table-list/table-list.component';
import { MapsComponent } from './features/maps/maps.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'table-list', component: TableListComponent },
  { path: 'maps', component: MapsComponent },

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
