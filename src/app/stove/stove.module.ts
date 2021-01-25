import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StovePageRoutingModule } from './stove-routing.module';

import { StovePage } from './stove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StovePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StovePage]
})
export class StovePageModule { }
