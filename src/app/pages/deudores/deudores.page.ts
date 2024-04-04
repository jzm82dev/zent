import { Component, OnInit } from '@angular/core';
import { GlobalProvider } from "../../providers/global";
import { GruposService } from '../../services/grupos.service';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { DetalleDeudaPage } from '../detalle-deuda/detalle-deuda.page';
import { PushService } from '../../services/push.service';
import { IonItemSliding  } from '@ionic/angular';
import { myEnterAnimation } from '../../animations/enter-left';
import { myLeaveAnimation } from '../../animations/leave-right';

@Component({
  selector: 'app-deudores',
  templateUrl: './deudores.page.html',
  styleUrls: ['./deudores.page.scss'],
})
export class DeudoresPage implements OnInit {

  deudores: any[] = [];
  meDeben: any[] = [];
  deboA: any[] = []; 
  total: any[] = [];
  respModal;
  disabledItem = '';
  notificacion: any;
  mensaje: any;
  datosLeidos: number = 0;

  constructor( public global: GlobalProvider,
               private grupoSvc: GruposService,
               public modalCtrl: ModalController,
               private alertCtrl: AlertController,
               private toastCtrl: ToastController,
               private pushSvc: PushService ) { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.disabledItem = '';
    this.deudores = [];
    this.grupoSvc.getDeudoresByGroup( this.global.usuario.id, this.global.grupo.id, this.global.usuario.telephone ).subscribe(
      resp => {
        console.log(this.deudores)
        this.datosLeidos = 1;
        this.deudores.push(... resp);
        this.meDeben = this.deudores.filter(
              elemento => elemento.deuda >= 0 
        );
        this.deboA = this.deudores.filter(
          elemento => elemento.deuda < 0 
        );
      }
    );
  }


  async abrirDetalleFromSlide( deudor ) {
    this.disabledItem = ' disabled ';
    this.detalleDeuda( deudor );
  }

  async detalleDeuda( deudor ) {
      const modal = await this.modalCtrl.create({
      component: DetalleDeudaPage,
      cssClass: 'my-custom-modal3-css',
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation,
      componentProps: {
        deudor : deudor,
        idGrupo : this.global.grupo.id,
        idUsuarioLogado: this.global.usuario.id,
        telefonoUsuarioLogado: this.global.usuario.telephone
      }
    });

    await modal.present();

    this.respModal = await modal.onDidDismiss();
    if( this.respModal.data ){
      if( this.respModal.data.hayCambios == true )
          this.ionViewDidEnter();
    }
  }

  async mandarRecordatorio( deudor ) {

    let mensaje = '¿Quieres notificar a ' + deudor.nombre_agenda + ' que te debe dinero?';
    const alert = await this.alertCtrl.create({
     header: mensaje,
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
         handler: (blah) => {
         }
       }, {
         text: 'Ok',
         cssClass: 'danger',
         handler: () => {
           this.sendPushMoroso( deudor );
         }
       }
     ]
   });

   await alert.present();
  }

  async mandarRecordatorioPagado( deudor ){
    let mensaje = '¿Quieres notificar a ' + deudor.nombre_agenda + ' que le has pagado?';
    const alert = await this.alertCtrl.create({
     header: mensaje,
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
         handler: (blah) => {
         }
       }, {
         text: 'Ok',
         cssClass: 'danger',
         handler: () => {
           this.sendPushPaid( deudor );
         }
       }
     ]
   });

   await alert.present();
  }


  sendPushMoroso( deudor ) {
    this.pushSvc.sendPushParticipantesMoroso( this.global.grupo.nombre,  deudor, deudor.deuda, this.global.usuario.name ).subscribe(
      (resp: any) => {
        let notification:any = JSON.parse(resp.result);
        this.notificacion = resp;
        if(notification.id)
          this.showToast( 'Notificación enviada!' );
        else
          this.showToast( 'Error al enviar notificación' );
      },
      error => {
        console.log('error->',error);
        this.showToast( 'Error al enviar notificacion: ' + error );
      }
    );
  }

  sendPushPaid( deudor ){
    this.pushSvc.sendPushParticipantesPagado( this.global.grupo.nombre,  deudor, Math.abs(deudor.deuda), this.global.usuario.name ).subscribe(
      (resp: any) => {
        let notification:any = JSON.parse(resp.result);
        this.notificacion = resp;
        if(notification.id)
          this.showToast( 'Notificación enviada!' );
        else
          this.showToast( 'Error al enviar notificación' );
      },
      error => {
        console.log('error->',error);
        this.showToast( 'Error al enviar notificacion: ' + error );
      }
    );
  }

  async showToast( mensaje: string ) {
      const toast = await this.toastCtrl.create({
          message: mensaje,
          duration: 2000
      });
      toast.present();
  }

  doRefresh( event ){
    setTimeout(() => {
      this.ionViewDidEnter();
      event.target.complete();
    }, 1500);
  }

  async presentConfirmPagarTodasDeduda( deudor, sliding: IonItemSliding ) {
    let mensaje = '¿Seguro que '+ deudor.nombre_agenda +' te ha pagado todo?';
    const alert = await this.alertCtrl.create({
     header: mensaje,
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
         handler: (blah) => {
         }
       }, {
         text: 'Ok',
         cssClass: 'danger',
         handler: () => {
           this.pagarTodasDeudas(deudor, sliding);
         }
       }
     ]
   });
   await alert.present();
  
  }

  pagarTodasDeudas(deudor, sliding: IonItemSliding) {

    sliding.close();
    this.grupoSvc.pagarTodasDeudas( this.global.usuario.telephone, deudor.telefono_usuario , this.global.grupo.id ).subscribe(
      resp => {
        this.mensaje = JSON.parse(resp);
        this.showToast( this.mensaje.mensaje);
        this.ionViewDidEnter();
      }
    )

  }

}
