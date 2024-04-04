import { Platform, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

import { LoadingService } from '../services/loading.service';
import { UsuariosService } from '../services/usuarios.service';
import { DataLocalService } from '../services/data-local.service';
import { NombreAgendaService } from '../services/nombre-agenda.service';
import { GlobalProvider } from "../providers/global";
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { verificateCode } from '../validators/telefono.validator';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

    constructor(private storage: Storage,
                private plt: Platform,
                public loading: LoadingService,
                public userService: UsuariosService,
                private toastCtrl: ToastController,
                public global: GlobalProvider,
                private nombreAgendaSvc: NombreAgendaService,
                private router: Router,
                private splashScreen: SplashScreen,
                private dlService: DataLocalService,
                public navCtrl: NavController,
                private nativePageTransitions: NativePageTransitions ) {
      this.plt.ready().then(() => {
        this.checkToken();
      });
    }

    checkToken() {
      this.storage.get('user').then(user => {
        if (user) {
          this.getUser(user.telephone, user.password);
        }else{
          //this.router.navigate(['login']);
          this.goTo('inicial');
        }
      })
    }

    login( usuario: string, pwd: string, oneSignalId?: string ) {
        this.getUser(usuario, pwd, true, oneSignalId);
    }

    logout() {
      return this.storage.remove('user').then(() => {
        this.storage.remove('auth-token');
        this.authenticationState.next(false);
        this.goTo('inicial');
      });
    }

    goTo( route: string) {
      let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 600,
        iosdelay:0,
        androiddelay:0
      };
      this.nativePageTransitions.flip(options);
      this.navCtrl.navigateRoot(route);
    }

    isAuthenticated() {
      return this.authenticationState.value;
    }

    newUserAuthentification() {
      this.authenticationState.next(true);
    }

    getUser( usuario: string, pwd: string, fromLogin?, OneSignalId?) {
      this.userService.login( usuario, pwd, OneSignalId).subscribe(
            resp => {
             if( resp ) {
                let data = resp;
                if( data.login ){
                  if(data.status == 'no_verify'){
                    this.logout();
                  }
                  this.dlService.saveUser( data.user, data.token );
                  this.global.usuario = data.user;
                  this.authenticationState.next(true);
                  this.splashScreen.hide();
                  this.goTo('inicio');
                }else{
                  if(fromLogin === true)
                    this.showToast(resp.message);
                    this.router.navigate(['login']);//this.goTo('login');//this.router.navigate(['login']);
                }
              }
              else{
                if(fromLogin === true)
                  this.showToast('Usuario o contraseña incorrecto');
                  this.router.navigate(['login']);
              }
            },
            error => console.log(error)
          );
    }

    async showToast( mensaje: string ) {
      const toast = await this.toastCtrl.create({
          message: mensaje,
          duration: 2000
      });
      toast.present();
    }

}
