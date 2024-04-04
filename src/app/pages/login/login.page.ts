import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { DataLocalService } from '../../services/data-local.service';
import { UsuariosService } from '../../services/usuarios.service';
import * as CryptoJS from 'crypto-js';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication.service';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UsernameValidator } from '../../validators/username.validator';
import { PasswordValidator } from '../../validators/password.validator';
import { existeTelefono } from '../../validators/telefono.validator';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { PushService } from "../../services/push.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  usuario: User;
  email: string;
  telefono: string;
  password: string;

  login_form: FormGroup;


  validation_messages = {
      'telefono': [
        { type: 'required', message: 'Teléfono es obligatorio.' },
        { type: 'minlength', message: 'Teléfono no puede menos de 9 caracteres.' },
      ],
      'password': [
      { type: 'required', message: 'Contaseña es obligatoria.' }
      ]
  }


  constructor( private dlService: DataLocalService,
               private userSvc: UsuariosService,
               private pushService: PushService,
               private toastCtrl: ToastController,
               private router: Router,
               private authService: AuthenticationService,
               public formBuilder: FormBuilder,
               public navCtrl: NavController, private nativePageTransitions: NativePageTransitions ) {
    this.usuario = new User(0, '', '', '', '', '', '', '', 0);
  }

  ngOnInit() {
    this.pushService.configuracionInicial();
    this.login_form = this.formBuilder.group({
      /* no-email
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])), */
      telefono: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(9),
        ],
        [existeTelefono(this.userSvc, 1000)]
      ),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }


  encriptarPwd( pwd:string) {
    return CryptoJS.MD5(pwd).toString();
  }

  async showToast( mensaje: string ) {
    const toast = await this.toastCtrl.create({
        message: mensaje,
        duration: 2000
    });
    toast.present();
  }


  async onSubmit(values){
    this.authService.login( values.telefono, this.encriptarPwd(values.password), this.pushService.userId );
  }

  irRegistro() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600,
      iosdelay:0,
      androiddelay:0
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.navigateRoot('register');
  }

  irRecordarContrasena(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600,
      iosdelay:0,
      androiddelay:0
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.navigateRoot('forgot-password');
  }

  irInicial() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600,
      iosdelay:0,
      androiddelay:0
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.navigateRoot('inicial');
  }

  get gTelefono() {
    return this.login_form.controls["telefono"];
  }



}
