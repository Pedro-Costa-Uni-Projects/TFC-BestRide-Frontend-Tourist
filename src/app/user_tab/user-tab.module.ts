import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DadosContaPageRoutingModule } from './user-tab-routing.module';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { DadosContaPage } from './user-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    DadosContaPageRoutingModule,
  ],
  declarations: [DadosContaPage],
})
export class DadosContaPageModule {}
