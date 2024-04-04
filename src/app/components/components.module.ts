import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases/purchases.component';
import { IonicModule } from '@ionic/angular';
import { ImagenPage } from '../pages/imagen/imagen.page';
import { ImagenPageModule } from '../pages/imagen/imagen.module';

@NgModule({
  entryComponents: [
    ImagenPage
  ],
  declarations: [
    PurchasesComponent
  ],
  exports: [
    PurchasesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ImagenPageModule
  ]
})
export class ComponentsModule { }
