import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirPage } from './air.page';

const routes: Routes = [
  {
    path: '',
    component: AirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirPageRoutingModule {}
