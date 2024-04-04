import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeudoresPageRoutingModule } from './deudores-routing.module';

import { DeudoresPage } from './deudores.page';
import { DetalleDeudaPage } from '../detalle-deuda/detalle-deuda.page';
import { DetalleDeudaPageModule } from "../detalle-deuda/detalle-deuda.module";
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  entryComponents: [
    DetalleDeudaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeudoresPageRoutingModule,
    DetalleDeudaPageModule,
    PipesModule
  ],
  declarations: [DeudoresPage]
})
export class DeudoresPageModule {}
