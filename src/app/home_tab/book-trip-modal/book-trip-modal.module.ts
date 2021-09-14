import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookTripModalPageRoutingModule } from './book-trip-modal-routing.module';
import { BookTripModalPage } from './book-trip-modal.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClient } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BookTripModalPageRoutingModule,
    SharedModule,
  ],
  declarations: [BookTripModalPage],
})
export class BookTripModalPageModule {}
