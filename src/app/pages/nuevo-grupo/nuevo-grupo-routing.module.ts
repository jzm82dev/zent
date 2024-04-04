import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoGrupoPage } from './nuevo-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoGrupoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoGrupoPageRoutingModule {}
