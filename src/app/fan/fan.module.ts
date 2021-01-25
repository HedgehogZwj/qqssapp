import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FanPageRoutingModule } from './fan-routing.module';

import { FanPage } from './fan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FanPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FanPage]
})
export class FanPageModule { }
