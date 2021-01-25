import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumidifierPage } from './humidifier.page';

const routes: Routes = [
  {
    path: '',
    component: HumidifierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumidifierPageRoutingModule {}
