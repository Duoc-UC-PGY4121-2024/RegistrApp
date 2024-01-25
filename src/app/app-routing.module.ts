import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', 
  loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) 
  },
  { path: 'home', 
  loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule), canActivate: [AuthGuard] 
  },
  {
    path: 'restaurar',
    loadChildren: () => import('./restaurar/restaurar.module').then( m => m.RestaurarPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule), canActivate: [AuthGuard] 
  },
  {
    path: 'eaccess',
    loadChildren: () => import('./eaccess/eaccess.module').then( m => m.EaccessPageModule)
  },
  { path: '**', redirectTo: 'e404', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
