import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableListComponent } from './features/table-list/table-list.component';
import { MapsComponent } from './features/maps/maps.component';

const routes: Routes = [
  { path: 'table', component: TableListComponent },
  { path: 'map', component: MapsComponent },

  { path: "", redirectTo: "table", pathMatch: "full" },
  { path: "**", redirectTo: "table" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
