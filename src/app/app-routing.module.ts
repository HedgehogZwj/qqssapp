import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'show',
    loadChildren: () => import('./show/show.module').then(m => m.ShowPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./show/show.module').then(m => m.ShowPageModule)
  },
  {
    path: 'fan',
    loadChildren: () => import('./fan/fan.module').then(m => m.FanPageModule)
  },
  {
    path: 'air',
    loadChildren: () => import('./air/air.module').then(m => m.AirPageModule)
  },
  {
    path: 'light',
    loadChildren: () => import('./light/light.module').then(m => m.LightPageModule)
  },
  {
    path: 'stove',
    loadChildren: () => import('./stove/stove.module').then(m => m.StovePageModule)
  },
  {
    path: 'humidifier',
    loadChildren: () => import('./humidifier/humidifier.module').then(m => m.HumidifierPageModule)
  },
  {
    path: 'update-password',
    loadChildren: () => import('./update-password/update-password.module').then(m => m.UpdatePasswordPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GamePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
