import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HumidifierPageRoutingModule } from './humidifier-routing.module';

import { HumidifierPage } from './humidifier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HumidifierPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HumidifierPage]
})
export class HumidifierPageModule { }
