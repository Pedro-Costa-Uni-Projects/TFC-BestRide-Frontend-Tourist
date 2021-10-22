import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommentsListPageRoutingModule } from './comments-list-routing.module';
import { CommentsListPage } from './comments-list.page';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentsListPageRoutingModule,
    SharedModule,
  ],
  declarations: [CommentsListPage],
})
export class CommentsListPageModule {}
