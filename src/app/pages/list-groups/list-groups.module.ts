import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListGroupsPageRoutingModule } from './list-groups-routing.module';

import { ListGroupsPage } from './list-groups.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListGroupsPageRoutingModule
  ],
  declarations: [ListGroupsPage],
  providers: [InAppBrowser]
})
export class ListGroupsPageModule {}
