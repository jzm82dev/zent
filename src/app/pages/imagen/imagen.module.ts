import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagenPageRoutingModule } from './imagen-routing.module';

import { ImagenPage } from './imagen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ImagenPage]
})
export class ImagenPageModule {}
