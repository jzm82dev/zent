import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisDatosPageRoutingModule } from './mis-datos-routing.module';

import { MisDatosPage } from './mis-datos.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PipesModule,
    MisDatosPageRoutingModule
  ],
  declarations: [MisDatosPage]
})
export class MisDatosPageModule {}
