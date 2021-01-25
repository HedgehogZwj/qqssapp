import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirPageRoutingModule } from './air-routing.module';

import { AirPage } from './air.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AirPage]
})
export class AirPageModule { }
