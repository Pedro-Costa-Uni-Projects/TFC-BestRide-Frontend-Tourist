import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'recover_account',
    loadChildren: () =>
      import('./recover_account/recover-account.module').then(
        (m) => m.RecuperarContaPageModule
      ),
  },
  {
    path: 'splash-screen',
    loadChildren: () =>
      import('./splash-screen/splash-screen.module').then(
        (m) => m.SplashScreenPageModule
      ),
  },
  {
    path: 'create_account',
    loadChildren: () =>
      import('./create_account/create-account.module').then(
        (m) => m.CriaContaPageModule
      ),
  },
  {
    path: 'home_tab',
    loadChildren: () =>
      import('./home_tab/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: 'definitions_tab',
    loadChildren: () =>
      import('./app_definitions/definitions.module').then(
        (m) => m.DefinicoesPageModule
      ),
  },
  {
    path: 'callendar',
    loadChildren: () =>
      import('./callendar/callendar.module').then(
        (m) => m.CalendarioPageModule
      ),
  },
  {
    path: 'user_tab',
    loadChildren: () =>
      import('./user_tab/user-tab.module').then((m) => m.DadosContaPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
