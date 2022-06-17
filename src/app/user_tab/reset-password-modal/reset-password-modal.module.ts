import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordModalPageRoutingModule } from './reset-password-modal-routing.module';

import { ResetPasswordModalPage } from './reset-password-modal.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ResetPasswordModalPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
  declarations: [ResetPasswordModalPage],
})
export class ResetPasswordModalPageModule {}
