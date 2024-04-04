import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificateCodePage } from './verificate-code.page';

const routes: Routes = [
  {
    path: '',
    component: VerificateCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificateCodePageRoutingModule {}
