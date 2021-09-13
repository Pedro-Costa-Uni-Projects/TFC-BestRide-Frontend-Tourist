import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMapaPageRoutingModule } from './modal-mapa-routing.module';

import { HttpClient } from '@angular/common/http';
import { ModalMapaPage } from './modal-mapa.page';
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
    ModalMapaPageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [ModalMapaPage],
})
export class ModalMapaPageModule {}
