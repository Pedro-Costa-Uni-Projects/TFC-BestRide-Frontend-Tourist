import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashScreenPage } from './splash-screen.page';

const routes: Routes = [
  {
    path: '',
    component: SplashScreenPage,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../login/login.module').then((m) => m.LoginPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashScreenPageRoutingModule {}
