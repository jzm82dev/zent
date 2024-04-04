import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  /*{
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },*/
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    //canActivate: [AuthGuard]
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canLoad: [AuthGuard]
    //canActivate: [AuthGuard]
  },
  {
    path: 'grupo/:id',
    loadChildren: () => import('./pages/grupo/grupo.module').then( m => m.GrupoPageModule),
    //canActivate: [AuthGuard]
    canLoad: [AuthGuard]
  },
  {
    path: 'nuevo-grupo',
    loadChildren: () => import('./pages/nuevo-grupo/nuevo-grupo.module').then( m => m.NuevoGrupoPageModule),
    //canActivate: [AuthGuard]
    canLoad: [AuthGuard]
  },
  {
    path: 'deudores',
    loadChildren: () => import('./pages/deudores/deudores.module').then( m => m.DeudoresPageModule),
    //canActivate: [AuthGuard]
    canLoad: [AuthGuard]
  }, {
    path: 'mis-datos',
    loadChildren: () => import('./pages/mis-datos/mis-datos.module').then( m => m.MisDatosPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'notificaciones/:tipo',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'inicial',
    loadChildren: () => import('./pages/inicial/inicial.module').then( m => m.InicialPageModule)
  },{
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'verificate-code',
    loadChildren: () => import('./pages/verificate-code/verificate-code.module').then( m => m.VerificateCodePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'list-groups',
    loadChildren: () => import('./pages/list-groups/list-groups.module').then( m => m.ListGroupsPageModule)
  },
  {
    path: 'how-to-use',
    loadChildren: () => import('./pages/how-to-use/how-to-use.module').then( m => m.HowToUsePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
