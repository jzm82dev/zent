import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqPageRoutingModule } from './faq-routing.module';

import { FaqPage } from './faq.page';

import { MiAccordionFaqComponent } from 'src/app/components/mi-accordion-faq/mi-accordion-faq.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqPageRoutingModule
  ],
  declarations: [FaqPage, MiAccordionFaqComponent]
})
export class FaqPageModule {}
