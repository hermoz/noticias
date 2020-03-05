import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// para la creación del proyecto se ha usado ionic start noticias tabs para el uso de las mismas
// se ha procedido a la modificación del proyecto englobándolas en la carpeta de pages
// y su consecuente modificación de la ruta path
const routes: Routes = [

  {
    path: 'tabs',
    loadChildren: './pages/tabs/tabs.module#TabsPageModule'
  },

 {
  path: '',
  loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: '**',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
