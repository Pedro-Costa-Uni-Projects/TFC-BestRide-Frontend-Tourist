import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordModalPageRoutingModule } from './reset-password-modal-routing.module';

import { ResetPasswordModalPage } from './reset-password-modal.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ResetPasswordModalPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ResetPasswordModalPage],
})
export class ResetPasswordModalPageModule {}
