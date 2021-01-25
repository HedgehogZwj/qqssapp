import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StovePage } from './stove.page';

const routes: Routes = [
  {
    path: '',
    component: StovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StovePageRoutingModule {}
