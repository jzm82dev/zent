import { Component, OnInit, Input } from '@angular/core';
import { Compra } from '../../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Tab2Page } from '../../pages/tab2/tab2.page';
import { ModalController } from '@ionic/angular';
import { ImagenPage } from '../../pages/imagen/imagen.page';
import { ActionSheetController } from '@ionic/angular';

import { myEnterAnimation } from '../../animations/enter';
import { myLeaveAnimation } from '../../animations/leave';

import { PurchasesService } from '../../services/purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {


  @Input() ticktes: Compra[] = [];
  @Input() idUsuario: number;
  @Input() esAdministrador: boolean;

  urlImages;

  constructor( private purchaseSvc: PurchasesService,
    private tab2Page: Tab2Page,
    public modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {
    this.urlImages = environment.urlImages + 'photos/';
  }

 
  async openTicket( ticket ) {
    const modal = await this.modalCtrl.create( {
      component: ImagenPage,
      cssClass: 'my-custom-modal-css',
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation,
      componentProps: {
        'ticket': ticket,
      }
    });
    await modal.present();
  }


  delete( idTicket ) {
    this.tab2Page.deleteTicket( idTicket );
  }

  pay( idTicket ) {
    this.tab2Page.payTicket( idTicket );
  }


  async lanzarMenu( idTicket) {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [ {
        text: 'Liquidar gasto',
        icon: 'card',
        cssClass: 'verde',
        handler: () => {
          this.pay( idTicket )
        }
      }, 
      {
        text: 'Eliminar gasto',
         icon: 'trash',
         cssClass: 'rojo',
         handler: () => {
          this.delete(idTicket);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        cssClass: 'action-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  

}
