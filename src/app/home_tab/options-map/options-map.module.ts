import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { OptionsMapPageRoutingModule } from './options-map-routing.module';

import { OptionsMapPage } from './options-map.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    OptionsMapPageRoutingModule,
    MaterialModule,
  ],
  declarations: [OptionsMapPage],
})
export class OptionsMapPageModule {}
