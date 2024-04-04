import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleDeudaPage } from './detalle-deuda.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleDeudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleDeudaPageRoutingModule {}
