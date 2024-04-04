import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { IonicSelectableModule } from 'ionic-selectable';

import { ResumeDeudaParticipantePage } from '../resume-deuda-participante/resume-deuda-participante.page';
import { ResumeDeudaParticipantePageModule } from "../resume-deuda-participante/resume-deuda-participante.module";


@NgModule({
  entryComponents: [
    ResumeDeudaParticipantePage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicSelectableModule,
    ResumeDeudaParticipantePageModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
