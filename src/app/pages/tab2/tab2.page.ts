import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { PurchasesService } from '../../services/purchases.service';
import { Compra } from '../../interfaces/interfaces';
import { ModalController, ToastController, IonSegment, AlertController } from '@ionic/angular';
import { NuevoTicketPage } from '../nuevo-ticket/nuevo-ticket.page';
import { UsuariosService } from '../../services/usuarios.service';
import { DataLocalService } from '../../services/data-local.service';
import { LoadingService } from '../../services/loading.service';
import { GlobalProvider } from "../../providers/global";
import { PushService } from '../../services/push.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Storage } from '@ionic/storage';

import { map, mergeMap, delay,flatMap, mergeAll } from 'rxjs/operators';
import { User } from '../../models/user';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @Input() usuariosTab1: any[];

  slideOptions = {
   allowSlidePrev: false,
   allowSlideNext: false
 };

  imagen = new FormData();
  gastoOperar: number;
  gastoOperarPagado: number;

  idUserLogado = '';

  comprasAll: Compra[] = [];
  comprasShow: Compra[] = [];
  @ViewChild(IonSegment , {static: true}) segment: IonSegment;
  users: any[] = [];
  nuevaCompra: any;
  datosLeidos: number = 0;
  esAdministrador: boolean = false;

  constructor(  private purchaseSevice: PurchasesService,
                private usuarioService: UsuariosService,
                public modalCtrl: ModalController,
                private toastCtrl: ToastController,
                public loading: LoadingService,
                public global: GlobalProvider,
                private alertCtrl: AlertController,
                private pushSvc: PushService,
                public dlSvc: DataLocalService,
                private authService: AuthenticationService,
                private storage: Storage ) {

                  this.idUserLogado = dlSvc.usuario.id.toString();
                }

  ngOnInit() {
    if( this.global.grupo.id_user_creador === this.global.usuario.id )
    this.esAdministrador = true;
    this.getPurchases( );
  }

  async showToast( mensaje: string ) {
    const toast = await this.toastCtrl.create({
        message: mensaje,
        duration: 2000
    });
    toast.present();
  }

  async addPurchase() {
    const modal = await this.modalCtrl.create({
      component: NuevoTicketPage
    });

    await modal.present();

    this.nuevaCompra = await modal.onDidDismiss();
    if ( this.nuevaCompra.data ) {
       this.loading.present();
       this.imagen = this.nuevaCompra.data.imagen;
       this.nuevaCompra.data.compra.user_id = this.dlSvc.usuario.id;
       this.nuevaCompra.data.compra.id_grupo = this.global.grupo.id;
       this.storage.get('auth-token').then( token => {
         if (token) {
             if(this.nuevaCompra.data.hayImagen === 0){ // Subimos ticket sin foto
               this.nuevaCompra.data.compra.img = '';
               this.purchaseSevice.savePurchase( this.nuevaCompra.data.compra, token ).subscribe(
                 (resp: any) => {
                   this.pushSvc.sendPushParticipantesGasto( this.nuevaCompra.data.compra.participantes,
                                  this.nuevaCompra.data.compra.title, this.global.usuario.name, this.nuevaCompra.data.compra.count,
                                  this.global.grupo.nombre, this.nuevaCompra.data.compra.telefono_id).subscribe(
                   );
                   this.loading.dismiss();
                   if(resp.status == 'success'){
                      this.showToast( resp.message );
                      this.getPurchases();
                    }
                   else{
                     this.showToast( resp.message );
                     this.authService.logout();
                    }
                },
                 error => {
                   this.showToast( 'Error al añadir ticket' );
                   this.loading.dismiss();
                 }
               );
             }else{ // Subimos ticket con foto
                 this.purchaseSevice.savePurchaseConFoto( this.imagen, this.nuevaCompra.data.compra, token ).then(
                   (resp: any) => {
                     this.pushSvc.sendPushParticipantesGasto( this.nuevaCompra.data.compra.participantes,
                                    this.nuevaCompra.data.compra.title, this.global.usuario.name, this.nuevaCompra.data.compra.count,
                                    this.global.grupo.nombre, this.nuevaCompra.data.compra.telefono_id).subscribe(
                    );
                     this.loading.dismiss();
                     let data:any = JSON.parse(resp.response);
                     if(data.status == 'success'){
                        this.showToast( data.message );
                        this.getPurchases();
                      }
                     else{
                       this.showToast( resp.message );
                       this.authService.logout();
                      }
                  },
                   error => {
                     this.showToast( 'Error al añadir ticket' );
                     this.loading.dismiss();
                   }
                 )
             }
          }else{// if token
            this.showToast( 'Su sesión ha caducado. Vuelva a ingresar sus datos.' );
            this.authService.logout();
          }
        });
       this.ionViewDidEnter();
    }
  }

  ionViewDidEnter() {
    this.ngOnInit();
    this.usuarioService.getUserByGroup( this.global.grupo.id, this.global.usuario.id ).subscribe(
      resp => {
        this.users = resp;
      }
    );
    this.segment.value = '0';
  }

  getPurchases() {
    this.storage.get('auth-token').then( token => {
      if (token) {
        this.purchaseSevice.getPurchaseByGroup( this.global.grupo.id, token, this.dlSvc.usuario.id ).subscribe(
            (resp: any) => {
              if( resp.status == 'success'){
                this.datosLeidos = 1;
                this.comprasAll = resp.tickets;
                this.comprasShow = this.comprasAll.filter( s => s.pagado === '0' );
              }else {
                this.datosLeidos = 1;
                this.showToast( 'Algo ha ido mal. Vuelva a ingresar tus datos.' );
                this.authService.logout();
              }
            });
      }else{
        this.showToast( 'Su sesión ha caducado. Vuelva a ingresar sus datos.' );
        this.authService.logout();
      }
    });
  }


  cambioUsuario( event ) {
    if ( event.detail.value === '0' ) {
      this.comprasShow = this.comprasAll.filter( s => s.pagado === '0' );
    } else {
      //this.comprasShow = this.comprasAll.filter( s => s.user_id === event.detail.value);
      this.comprasShow = this.comprasAll.filter( s => s.telefono_id === event.detail.value);
    }
  }

  salir() {
    this.dlSvc.deleteUser();
  }

  deleteTicket( idTicket ) {
    this.presentAlertConfirm('delete', idTicket);
  }

  deleteTicketSvc( idTicket ) {
    this.storage.get('auth-token').then( token => {
      if (token) {
          this.loading.present();
          this.purchaseSevice.deleteTicket( idTicket, token ).subscribe(
            (resp: any) => {
              this.loading.dismiss();
              if(resp.status == 'success'){
                this.showToast( resp.message );
                this.ionViewDidEnter();
              }else{
                this.showToast( resp.message );
              }
            }
          )
        }
        else{
          this.showToast( 'Su sesión ha caducado. Vuelva a ingresar sus datos.' );
          this.authService.logout();
        }
      });
    }

  payTicket( idTicket ) {
    this.presentAlertConfirm('pay', idTicket);
  }

  payTicketSvc( idTicket ) {
    this.storage.get('auth-token').then( token => {
      if (token) {
          this.loading.present();
          this.purchaseSevice.payTicket( idTicket, token ).subscribe(
            resp => {
              this.loading.dismiss();
              this.showToast( 'Ticket actualizado de la lista' );
              this.ionViewDidEnter();
            }
          )
        }
        else{
          this.showToast( 'Su sesión ha caducado. Vuelva a ingresar sus datos.' );
          this.authService.logout();
        }
      });
    }


  
  async presentAlertConfirm( option, id ) {
    let mensaje = '¿Seguro que quieres eliminar el gasto?';
    if( option === 'pay')
      mensaje = '¿Seguro que quieres actualizar este gasto como liquidado?';

   const alert = await this.alertCtrl.create({
     header: mensaje,
     //message: mensaje,
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
         handler: (blah) => {
           //this.pantallaNormal();
         }
       }, {
         text: 'Ok',
         cssClass: 'danger',
         handler: () => {
           if( option === 'pay')
             this.payTicketSvc(id);
          else
            this.deleteTicketSvc(id);
         }
       }
     ]
   });

   await alert.present();
 }

 doRefresh( event ){
   setTimeout(() => {
     this.ionViewDidEnter();
     event.target.complete();
   }, 1500);
 }

}
