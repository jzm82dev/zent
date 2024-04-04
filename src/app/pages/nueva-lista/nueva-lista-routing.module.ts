import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaListaPage } from './nueva-lista.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaListaPageRoutingModule {}
