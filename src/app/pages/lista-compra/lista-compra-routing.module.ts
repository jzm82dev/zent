import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCompraPage } from './lista-compra.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCompraPageRoutingModule {}
