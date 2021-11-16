import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CalendarioPageRoutingModule } from './tour-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TourPage } from './tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CalendarioPageRoutingModule,
  ],
  declarations: [TourPage],
})
export class TourPageModule {}
