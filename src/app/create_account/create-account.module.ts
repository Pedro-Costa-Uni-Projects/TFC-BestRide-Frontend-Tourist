import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriaContaPageRoutingModule } from './create-account-routing.module';

import { CriaContaPage } from './create-account.page';

import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriaContaPageRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [CriaContaPage],
})
export class CriaContaPageModule {}
