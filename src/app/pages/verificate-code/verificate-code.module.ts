import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificateCodePageRoutingModule } from './verificate-code-routing.module';

import { VerificateCodePage } from './verificate-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VerificateCodePageRoutingModule
  ],
  declarations: [VerificateCodePage]
})
export class VerificateCodePageModule {}
