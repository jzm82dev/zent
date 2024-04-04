import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoGrupoPageRoutingModule } from './nuevo-grupo-routing.module';

import { NuevoGrupoPage } from './nuevo-grupo.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { NgSelectModule } from '@ng-select/ng-select';

import { ContactosPage } from '../contactos/contactos.page';
import { ContactosPageModule } from "../contactos/contactos.module";

@NgModule({
  entryComponents: [
    ContactosPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    IonicModule,
    NuevoGrupoPageRoutingModule,
    IonicSelectableModule,
    ContactosPageModule
  ],
  declarations: [NuevoGrupoPage]
})
export class NuevoGrupoPageModule {}
