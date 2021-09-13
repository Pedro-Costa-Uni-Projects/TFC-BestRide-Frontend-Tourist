import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeVerificationPage } from './code-verification.page';

const routes: Routes = [
  {
    path: '',
    component: CodeVerificationPage
  },
  {
    path: 'reset-password-modal',
    loadChildren: () => import('./reset-password-modal/reset-password-modal.module').then( m => m.ResetPasswordModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeVerificationPageRoutingModule {}
