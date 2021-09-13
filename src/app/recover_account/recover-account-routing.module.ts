import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverAccountPage } from './recover-account.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverAccountPage
  },
  {
    path: 'code-verification',
    loadChildren: () => import('./code-verification/code-verification.module').then( m => m.CodeVerificationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverAccountPageRoutingModule {}
