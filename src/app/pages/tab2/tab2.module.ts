import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ComponentsModule } from '../../components/components.module';
import { NuevoTicketPage } from "../nuevo-ticket/nuevo-ticket.page";
import { NuevoTicketPageModule } from "../nuevo-ticket/nuevo-ticket.module";
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  entryComponents: [
    NuevoTicketPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    NuevoTicketPageModule,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
