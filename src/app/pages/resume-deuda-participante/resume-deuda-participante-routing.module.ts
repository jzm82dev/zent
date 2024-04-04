import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeDeudaParticipantePage } from './resume-deuda-participante.page';

const routes: Routes = [
  {
    path: '',
    component: ResumeDeudaParticipantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeDeudaParticipantePageRoutingModule {}
