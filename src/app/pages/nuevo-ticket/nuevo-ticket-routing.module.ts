import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoTicketPage } from './nuevo-ticket.page';


const routes: Routes = [
  {
    path: '',
    component: NuevoTicketPage
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class NuevoTicketPageRoutingModule {}
