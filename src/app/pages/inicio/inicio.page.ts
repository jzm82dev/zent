import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { LoadingService } from '../../services/loading.service';
import { GlobalProvider } from "../../providers/global";
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { NombreAgendaService } from '../../services/nombre-agenda.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  totalGastado: number = 0;
  colorButton: string;

  slideOptions = {
   allowSlidePrev: false,
   allowSlideNext: false
  };

  constructor( private actionSheetCtrl: ActionSheetController,
               public loading: LoadingService,
               public global: GlobalProvider,
               private nombreAgendaSvc: NombreAgendaService,
               private authService: AuthenticationService,
               private socialSharing: SocialSharing,
               private userService: UsuariosService,
               public router: Router,
               private nativePageTransitions: NativePageTransitions,
               private iab: InAppBrowser, public platform: Platform) {
  }

  ngOnInit() {
    this.getResume();
  }

  async guardarContactos(){
    await this.nombreAgendaSvc.saveMyNames( 0 );
  }

  ionViewDidEnter() {
    this.guardarContactos();
    this.getResume();
    this.nombreAgendaSvc.updateContactsNotName();
  }

  faq(){
    let options: NativeTransitionOptions = {
      duration: 600
    };
    this.nativePageTransitions.fade(null);
    this.router.navigate( ['/faq'] );
  }

  misAjustes() {
    let options: NativeTransitionOptions = {
      duration: 600
    };
    this.nativePageTransitions.fade(null);
    this.router.navigate( ['/mis-datos'] );
  }

  listGroup(){
    let options: NativeTransitionOptions = {
      duration: 600
    };
    this.nativePageTransitions.fade(null);
    this.router.navigate( ['/list-groups'] );
  }

  misNotificaciones() {
    let options: NativeTransitionOptions = {
      duration: 1100
    };
    this.nativePageTransitions.fade(null);
    this.router.navigate( ['/notificaciones/todos'] );
  }

  async openMenu() {

     const actionSheet = await this.actionSheetCtrl.create({
       buttons: [ /*{
         text: 'Mis ajustes',
         icon: 'settings',
         cssClass: 'action-dark',
         handler: () => {
           //console.log('Share clicked');
           this.misAjustes();
         }
       },*/{
         text: 'Notificaciones',
         icon: 'notifications',
         cssClass: 'action-dark',
         handler: () => {
           //console.log('Share clicked');
           this.misNotificaciones();
         }
       },{
         text: 'Compartir App',
         icon: 'share',
         cssClass: 'action-dark',
         handler: () => {
           this.sharedApp();
         }
       }, {
         text: 'Contacta',
         icon: 'mail',
         cssClass: 'action-dark',
         handler: () => {
           this.contactaByEmail();
         }
       },
       {
        text: 'Cómo se usa',
        icon: 'help-circle',
        cssClass: 'action-dark',
        handler: () => {
          this.openHowToUse();
        }
      },{
        text: 'Preguntas frecuentes',
        icon: 'lock',
        cssClass: 'action-dark',
        handler: () => {
          this.faq();
        }
      },
      {
        text: 'Privacidad',
        icon: 'lock',
        cssClass: 'action-dark',
        handler: () => {
          this.openPoliticy();
        }
      },
        {
         text: 'Salir',
         icon: 'log-out',
         cssClass: 'action-dark',
         handler: () => {
           this.logout();
         }
       }]
     });
     await actionSheet.present();
   }

   sharedApp() {
     let sms = 'Hola, \n\nCon Zent puedes crear tus grupos de vacaciones o quedadas con amigos, tu grupo con tu compañero de piso o gastos familiares y por supuesto, contabilizar gastos.';
     sms+=' \n\nDescárgala gratis desde: \n\nPlay Store https://play.google.com/store/apps/details?id=com.jorgezancada.zent \nApp Store https://apps.apple.com/es/app/zent/id1519656842';
     sms+='\n\nTu amigo '+this.global.usuario.name + ' ya la tiene. ¿A qué esperas?'
     this.socialSharing.share(
      sms,
       '' ,
       '', '');
   }

    //https://bit.ly/2Un0fsj 
   contactaByEmail() {
     this.socialSharing.canShareViaEmail().then(() => {
       this.socialSharing.shareViaEmail('', 'Contacto App', ['consultas.zent@gmail.com']).then(() => {
          }).catch(() => {
            alert(JSON.stringify('Ha ocurrido algo al abrir tu email', null, 4));
          });
        }).catch(() => {
          alert(JSON.stringify('Opción no disponible en tu teléfono', null, 4));
        });
   }


   logout() {
      this.authService.logout();
    }

    doRefresh( event ){
      setTimeout(() => {
        this.ionViewDidEnter();
        event.target.complete();
      }, 1500);
    }

    openPoliticy(){
      if(this.platform.is("android")){
        const browser = this.iab.create('https://fabrikapps.es/zent/privacy-policy-android.html', '_blank');
        browser.show();
      }
      else{
        const browser = this.iab.create('https://fabrikapps.es/zent/privacy-policy-ios.html', '_blank');
        browser.show();
      }
    }

    openHowToUse(){
      let options: NativeTransitionOptions = {
        duration: 600
      };
      this.nativePageTransitions.fade(null);
      this.router.navigate( ['/how-to-use'] );
    }


    async checkOneSignalId(){
      console.log(this.userService.checkOneSignalId(this.global.usuario.telephone));
    }

    getResume(){
      let meDeben = 0;
      let debo = 0;
      this.loading.present();
      this.userService.getResumeDeudas(this.global.usuario.telephone).subscribe(
        (resp: any) => {
          this.loading.dismiss();
          meDeben = resp[0].me_deben;
          debo = resp[0].debo;
          this.totalGastado = meDeben - debo;
       } 
      )
    }


}
