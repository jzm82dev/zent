import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { NuevaListaPage } from '../nueva-lista/nueva-lista.page';
import { NuevaListaPageModule } from "../nueva-lista/nueva-lista.module";
import { ListaCompraPage } from '../lista-compra/lista-compra.page';
import { ListaCompraPageModule } from "../lista-compra/lista-compra.module";

@NgModule({
  entryComponents: [
    NuevaListaPage,
    ListaCompraPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NuevaListaPageModule,
    ListaCompraPageModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
