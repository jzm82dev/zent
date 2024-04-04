import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactosPageRoutingModule } from './contactos-routing.module';

import { ContactosPage } from './contactos.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactosPageRoutingModule,
    IonicSelectableModule,
    NgSelectModule
  ],
  declarations: [ContactosPage]
})
export class ContactosPageModule {}
