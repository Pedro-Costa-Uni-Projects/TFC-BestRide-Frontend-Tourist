import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsMapPage } from './options-map.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsMapPageRoutingModule {}
