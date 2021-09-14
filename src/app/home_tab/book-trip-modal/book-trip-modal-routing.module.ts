import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookTripModalPage } from './book-trip-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BookTripModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookTripModalPageRoutingModule {}
