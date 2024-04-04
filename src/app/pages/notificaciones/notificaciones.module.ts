import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesPageRoutingModule } from './notificaciones-routing.module';

import { NotificacionesPage } from './notificaciones.page';
import { PipesModule } from '../../pipes/pipes.module';

import { TimeAgoPipe } from 'time-ago-pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesPageRoutingModule,
    PipesModule
  ],
  declarations: [
    NotificacionesPage,
    TimeAgoPipe
  ]
})
export class NotificacionesPageModule {}
