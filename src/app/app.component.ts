import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthenticationService } from './services/authentication.service';

import { Router } from '@angular/router';
import { PushService } from "./services/push.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  loading: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private pushService: PushService
  ) {
    //this.presentLoading( 'Cargando datos' );
    this.initializeApp();
  }

  initializeApp() {
      console.log('pasamos')
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
      this.pushService.configuracionInicial();
      console.log('llegamos')

      // Nuevo

    /*  this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          console.log('Entramos en Inicio');
          //this.router.navigate(['inicio']);
        } else {
          console.log('Entramos en Login');
          //this.router.navigate(['login']);
        }
      });
      */


    });
  }

  async presentLoading( mensaje: string ) {
    this.loading = await this.loadingCtrl.create({
      message: mensaje,
      duration: 2000,
      cssClass: 'my-loading'
    });
    await this.loading.present();

  }


}
