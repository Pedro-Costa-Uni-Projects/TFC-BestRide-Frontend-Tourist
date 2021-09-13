import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverAccountPageRoutingModule } from './recover-account-routing.module';

import { RecoverAccountPage } from './recover-account.page';
import { SharedModule } from '../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverAccountPageRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [RecoverAccountPage],
})
export class RecuperarContaPageModule {}
