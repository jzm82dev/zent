import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagenPage } from './imagen.page';

const routes: Routes = [
  {
    path: '',
    component: ImagenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagenPageRoutingModule {}
