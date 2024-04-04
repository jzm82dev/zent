import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoged: any = false;

  constructor( public afAuth: AngularFireAuth,
               private toastCtrl: ToastController ) {
    afAuth.authState.subscribe(
       user => this.isLoged = user
     );
   }


  // login
  async onLogin( user: User ) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword( user.email, user.password );
    } catch (error) {
      console.log('Error onLogin user', error);
    }
  }

  async showToast( mensaje: string ) {
      const toast = await this.toastCtrl.create({
          message: mensaje,
          duration: 2000
      });
      toast.present();
  }


  // register
  async onRegister( user: User ) {
  try {
      return await this.afAuth.auth.createUserWithEmailAndPassword( user.email, this.encriptarPwd(user.password) );
    } catch (error) {
      this.showToast( 'Error. ' +  error.message);
    }
  }

  encriptarPwd( pwd:string) {
    return CryptoJS.MD5(pwd).toString();
  }

}
