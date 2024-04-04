import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowToUsePage } from './how-to-use.page';

const routes: Routes = [
  {
    path: '',
    component: HowToUsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowToUsePageRoutingModule {}
