import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';

import { IonicModule } from '@ionic/angular';

import { NuevaListaPageRoutingModule } from './nueva-lista-routing.module';

import { NuevaListaPage } from './nueva-lista.page';
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [NuevaListaPage]
})
export class NuevaListaPageModule {}
