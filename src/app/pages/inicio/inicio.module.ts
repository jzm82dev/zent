import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';
import { PipesModule } from '../../pipes/pipes.module';

import { InicioPage } from './inicio.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    PipesModule
  ],
  declarations: [InicioPage],
  providers: [InAppBrowser]
})
export class InicioPageModule {}
