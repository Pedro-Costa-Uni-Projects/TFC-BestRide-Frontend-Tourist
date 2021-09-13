import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'ion2-calendar';
import { IonicModule } from '@ionic/angular';

import { CalendarioPageRoutingModule } from './callendar-routing.module';

import { CalendarioPage } from './callendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    CalendarioPageRoutingModule,
  ],
  declarations: [CalendarioPage],
})
export class CalendarioPageModule {}
