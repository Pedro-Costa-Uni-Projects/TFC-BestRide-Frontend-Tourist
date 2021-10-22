import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentsListPage } from './comments-list.page';

const routes: Routes = [
  {
    path: '',
    component: CommentsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsListPageRoutingModule {}
