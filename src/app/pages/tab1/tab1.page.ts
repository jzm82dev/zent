import { Component, OnInit,ViewChild } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/interfaces';
import { PurchasesService } from '../../services/purchases.service';
import { DataLocalService } from '../../services/data-local.service';
import { GruposService } from '../../services/grupos.service';
import { ActionSheetController, ToastController, AlertController } from '@ionic/angular';
import { GlobalProvider } from "../../providers/global";
import { LoadingService } from '../../services/loading.service';
import { IonSelect } from '@ionic/angular';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { PipesModule } from "../../pipes/pipes.module";
import { IonicSelectableComponent } from 'ionic-selectable';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NombreAgendaService } from '../../services/nombre-agenda.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ResumeDeudaParticipantePage } from '../resume-deuda-participante/resume-deuda-participante.page';
import { myEnterAnimation } from '../../animations/enter-left';
import { myLeaveAnimation } from '../../animations/leave-right';
import { Platform } from '@ionic/angular';
import { existeTelefono } from '../../validators/telefono.validator';



import { Contacts, Contact, ContactField, ContactName, ContactFieldType,
         ContactFindOptions, IContactFindOptions } from '@ionic-native/contacts/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //@ViewChild(IonSelect, {static: false}) select: IonSelect;
  @ViewChild(IonicSelectableComponent, {static: false}) select: IonicSelectableComponent;
  @ViewChild(IonSelect, {static: false}) selectDeleteParticipant: IonSelect;

  misGastos;
  usuarios: any[] = [];
  usersByGroup: string[];
  public pagoMedio: any = 0;
  nombreUserCreador: string;
  tipoGrupo: string;
  totalGastado: number = 0;

  tipos: string[] = ['quedada', 'hogar', 'vacaciones', 'familia', 'otro'];
    
  contactosSelect: any[] = [];

  contactList = [];

  agenda: any[] = [
    {
      id: 1,
      name: 'Hermana',
      phoneNumber: '+34 635 088 912',
      email: 'mariaz@gmail.com'
    },
    {
      id: 2,
      name: 'Mamen',
      phoneNumber: '+34676550085',
      email: 'mgotor41@gmail.com'
    },
    {
      id: 3,
      name: 'Pauli',
      phoneNumber: '679 015 532',
      email: 'motrriuno@gmail.com'
    },
    {
      id: 4,
      name: 'Jorge',
      phoneNumber: '626804645',
      email: 'jorge.zancada.moreno@gmail.com'
    },
  ];



  constructor( private userService: UsuariosService,
               private purchaseService: PurchasesService,
               public dlSvc: DataLocalService,
               private nombreAgendaSvc: NombreAgendaService,
               private grupoSvc: GruposService,
               public global: GlobalProvider,
               private contacts: Contacts,
               private alertCtrl: AlertController,
               private toastCtrl: ToastController,
               private actionSheetCtrl: ActionSheetController,
               public loading: LoadingService,
               private socialSharing: SocialSharing,
               public router: Router,
               private storage: Storage,
               private authService: AuthenticationService,
               public modalCtrl: ModalController,
               public platform: Platform  ) { }

  ngOnInit(){
    this.nombreAgendaSvc.saveMyNames( this.global.grupo.id );
    var addParticipant = document.getElementById('addParticipant');
    addParticipant.style.display = 'none';

    var deleteParticipant = document.getElementById('deleteParticipant');
    deleteParticipant.style.display = 'none';

  }

  mostrarParticipante() {
    this.select.open();
  }

  mostrarParticipanteEliminar() {
    this.selectDeleteParticipant.open();
  }

  ionViewDidEnter() {
    this.nombreAgendaSvc.updateContactsNotName();
    this.getUsersG();
  }

  async showToast( mensaje: string ) {
      const toast = await this.toastCtrl.create({
          message: mensaje,
          duration: 3000
      });
      toast.present();
  }

  getUsersG(){
    this.loading.present();
    this.userService.getPagadoPorUsuario( this.global.grupo.id, this.global.usuario.id ).subscribe(
      resp => {
        this.usuarios = resp;
        this.calculoPagoMedio();
        this.loading.dismiss();
        this.creadorGrupo();
        this.leerTipoGrupo();
      },
      error => console.log(error)
    );
  }

  calculoPagoMedio() {
    this.pagoMedio = 0;
    this.totalGastado = 0;
    let valor: any;
    for ( const usuario of this.usuarios ) {
      if( this.global.usuario.id === usuario.id)
        this.misGastos = usuario.total_pagado;
      valor = usuario.total_pagado;
      this.totalGastado += parseFloat(usuario.gasto);
      this.pagoMedio += parseFloat( valor );
     }
     this.pagoMedio = this.pagoMedio / this.usuarios.length;
  }


  liquidar() {
    this.purchaseService.liquidarGastos( this.global.grupo.id, this.global.usuario.id ).subscribe(
      post => {
        this.ionViewDidEnter();
        this.loading.dismiss();
      },
      error => {
        this.showToast( 'Error al liquidar deudas' );
        this.loading.dismiss();
      });
  }

  async confirmLiquidar( ) {
    let mensaje = 'Te han pagado todo lo que se te debe';
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
           this.liquidar();
         }
       }
     ]
   });
   await alert.present();
  }



  creadorGrupo() {
    if( this.global.grupo.id_user_creador === this.global.usuario.id )
      this.nombreUserCreador = 'ti';
    else{
      const creador = this.usuarios.find( element => element.id == this.global.grupo.id_user_creador );
      this.nombreUserCreador = creador.name;
    }
  }

  leerTipoGrupo() {
    this.tipoGrupo = this.tipos[this.global.grupo.id_tipo - 1];
  }


  async openMenu() {

     const actionSheet = await this.actionSheetCtrl.create({
       buttons: [ {
         text: 'Añadir participante',
         icon: 'person-add',
         cssClass: 'action-dark',
         handler: () => {
              this.getContactsAgendaTelefono();
              this.mostrarParticipante();
        }
       }, {
         text: 'Eliminar participante',
         icon: 'walk',
         cssClass: 'action-dark',
         handler: () => {
           if( this.global.grupo.id_user_creador == this.global.usuario.id  ){
             this.getContactsParticipantesGrupo();
             this.mostrarParticipanteEliminar();
           } else {
              this.soperacionSoloAdminAlert();
           }
         }
       }, {
         text: 'Compartir Grupo',
         icon: 'share',
         cssClass: 'action-dark',
         handler: () => {
           this.sharedGroup();
         }
       },{
         text: 'Eliminar grupo',
         icon: 'trash',
         cssClass: 'rojo',
         handler: () => {
           this.confirmEliminarGrupo();
         }
       }]
     });
     await actionSheet.present();
   }


   obtenerAgendaAndroid() {
    return new Promise(resolve => {
    let mobile;
    let name;
    this.contacts.find(
      ["displayName", "phoneNumbers"],
      {multiple: true, hasPhoneNumber: true}
      ).then((contacts) => {
        for (var i=0 ; i < contacts.length; i++){
          name = contacts[i].displayName;
          if(name!='' && name!=null) {
              if(contacts[i].phoneNumbers[0].value.slice(0,1)=='+' || contacts[i].phoneNumbers[0].value.slice(0,1)=='0'){
                mobile=contacts[i].phoneNumbers[0].value.replace(/[^a-zA-Z0-9+]/g, "");
              }
              else {
                mobile=contacts[i].phoneNumbers[0].value.replace(/[^a-zA-Z0-9]/g, "");
              }
              if(contacts[i].displayName !== null) {
                var contact = {};
                contact["id"] = i + 1 ;
                contact["name"] = contacts[i].displayName;
                contact["phoneNumber"] = mobile//contacts[i].phoneNumbers[0].value;
                contact["email"] = ';'
                this.contactList.push(contact);
              }
            }
        }
    });
    setTimeout(() => {
      resolve('Resuelto');
    }, 2000);
    });
  }


  obtenerAgendaIos(){

    let options = {
      filter: "",
      multiple: true,
      hasPhoneNumber: true,
      desiredFields: ["phoneNumbers", "name"],
    };

    return new Promise(resolve => {
     
      this.contacts.find( ['*'], options).then( (resp: any[]) => {
      let mobile;
      let name;
      for (var n=0 ; n < resp.length; n++){ 
        if( resp[n].phoneNumbers != null){
          name = resp[n].name.formatted;
          if(name!='' && name!=null) {
            
            if(resp[n].phoneNumbers[0].value.slice(0,1)=='+' || resp[n].phoneNumbers[0].value.slice(0,1)=='0'){
              mobile=resp[n].phoneNumbers[0].value.replace(/[^a-zA-Z0-9+]/g, "");
            }
            else {
              mobile=resp[n].phoneNumbers[0].value.replace(/[^a-zA-Z0-9]/g, "");
            }
            var contact = {}
            contact["id"] = n+1;
            contact["name"] = name;
            contact["phoneNumber"]= mobile;
            contact["email"] = ';'
            this.contactList.push(contact);
          }
      }
      }
    });
    setTimeout(() => {
      resolve('Resuelto');
    }, 2000);
    });
  }

   ordenarArray(a, b) {
     // Use toUpperCase() to ignore character casing
       const bandA = a.name.toUpperCase();
       const bandB = b.name.toUpperCase();

       let comparison = 0;
       if (bandA > bandB) {
         comparison = 1;
       } else if (bandA < bandB) {
         comparison = -1;
       }
       return comparison;
     }

     async getContactsAgendaTelefono() {
         this.contactList = [];
         if(this.platform.is("android")){
            const result = await this.obtenerAgendaAndroid();
         }else{
            const result = await this.obtenerAgendaIos();
         }
         this.contactList.sort(this.ordenarArray);
     }

     async getContactsParticipantesGrupo() {
         this.contactList = [];
         this.contactList = this.usuarios.filter( usuario => usuario.id != this.global.usuario.id);
     }

     onSelectAniadirParticipant( event) {
       this.loading.present();
       this.contactosSelect = [];
       this.contactosSelect.push(...event.value);
       this.grupoSvc.addParticipantesGrupo(this.contactosSelect, this.global.grupo.id, this.global.usuario.id ).
       subscribe(
          resp => {
            this.showToast( resp['mensaje'] );
            this.ionViewDidEnter();
            this.loading.dismiss();
          },
          error => {
            this.showToast( 'Error al añadir participante' );
            this.loading.dismiss();
          }
        );
     }

     onSelectDeleteParticipant( event ) {
        this.loading.present();
        this.grupoSvc.deleteParticipanteGrupo( event.detail.value, this.global.grupo.id, this.global.usuario.id ).
        subscribe(
          resp => {
            this.showToast( resp['mensaje'] );
            this.ionViewDidEnter();
            this.loading.dismiss();
          },
          error => {
            this.showToast( 'Error al eliminar participante' );
            this.loading.dismiss();
          }
        );
     }

     async soperacionSoloAdminAlert() {
          let mensaje = 'Operación únicamente permitida por el Administrador del grupo';
          const alert = await this.alertCtrl.create({
             header: mensaje,
             //message: mensaje,
             buttons: [
               {
                 text: 'OK',
                 role: 'cancel',
                 handler: (blah) => {
                   //this.pantallaNormal();
                 }
               }
             ]
           });
          await alert.present();
     }

     async confirmEliminarGrupo( ) {

          let mensaje = 'Seguro que quieres eliminar el grupo';
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
                  this.borrarGrupo();
                }
              }
            ]
          });
            await alert.present();
    }

    borrarGrupo() {
      this.storage.get('auth-token').then( token => {
        if (token) {
          this.loading.present();
          this.grupoSvc.borrarGrupo( this.global.grupo.id, token ).subscribe(
            (resp: any) => {
              this.showToast( resp.message );
              this.loading.dismiss();
              if( resp.status == 'success')
                this.router.navigate(['/inicio']);
              else{
                this.showToast( 'Sólo el administrador puede eliminar el grupo' );
                this.router.navigate(['/inicio']);
              }
            },
            error => {
              this.showToast( 'Error al eliminar grupo' );
              this.loading.dismiss();
            }
          )
        }else{
          this.showToast( 'Su sesión ha caducado. Vuelva a ingresar sus datos.' );
          this.authService.logout();
        }
      });
    }

    sharedGroup() {
      let sms = 'Hola, \n\nCon Zent puedes crear tus grupos de vacaciones o quedadas con amigos, tu grupo con tu compañero de piso o gastos familiares y por supuesto, contabilizar gastos.';
      sms+=' \n\nDescárgala gratis desde: \n\nPlay Store https://play.google.com/store/apps/details?id=com.jorgezancada.zent \nApp Store https://apps.apple.com/es/app/zent/id1519656842';
      sms+='\n\nTu amigo '+this.global.usuario.name + ' ya la tiene y te ha añadido al grupo ' +  this.global.grupo.nombre + ' . ¿A qué esperas?'
      this.socialSharing.share(
      sms,
       '' ,
       '', '');
    }

    async verResumenDeudaParticipante( participante ){
      const modal = await this.modalCtrl.create({
      component: ResumeDeudaParticipantePage,
      cssClass: 'my-custom-modal2-css',
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation,
        componentProps: {
          idUsuarioLogado: this.global.usuario.id ,
          telefonoUsuarioLogado: this.global.usuario.telephone,
          participante : participante,
          idGrupo : this.global.grupo.id
      }
    });

    await modal.present();

    }


    doRefresh( event ){
      setTimeout(() => {
        this.ionViewDidEnter();
        event.target.complete();
      }, 1500);
    }



}
