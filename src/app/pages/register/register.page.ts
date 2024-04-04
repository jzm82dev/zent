/*
  no-email -> actualización de quitar el email
*/

import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { DataLocalService } from '../../services/data-local.service';
import { AuthService } from '../../services/auth.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { GlobalProvider } from "../../providers/global";
import { ToastController, ModalController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UsernameValidator } from '../../validators/username.validator';
import { PasswordValidator } from '../../validators/password.validator';

import { NombreAgendaService } from '../../services/nombre-agenda.service';
import { AuthenticationService } from '../../services/authentication.service';
import { LoadingService } from '../../services/loading.service';

import { File, FileEntry, IWriteOptions } from '@ionic-native/file/ngx';
//import { TelefonoValidator } from "../../validators/telefono.validator";
import { uniqueTelefono } from '../../validators/telefono.validator';

import { PushService } from "../../services/push.service";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';



declare var window: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('passwordEyeRegister', {static: true}) passwordEye;
  @ViewChild('repeatPasswordEyeRegister', {static: true}) repeatPasswordEye;

  usuario: User;
  tempImages: string[] = [];
  validations_form: FormGroup;
  foto: any = null;
  iconpassword  =  'eye-off';
  passwordTypeInput  =  'password';
  radomCode: number = 0;

  iconRepeatPassword  =  'eye-off';
  repeatPasswordTypeInput  =  'password';

  validation_messages = {
      'username': [
        { type: 'required', message: 'Nombre es obligatorio.' },
        { type: 'maxlength', message: 'Username no puede tener más de 25 caracteres.' },
        { type: 'validUsername', message: 'Tu username está ya siendo usado. Por favor elija otro.' }
      ],
      /* no-email */
      /*'email': [
        { type: 'required', message: 'Email es obligatorio.' },
        { type: 'pattern', message: 'Por fafor, introduce un email válido.' }
      ],*/
      'telefono': [
        { type: 'required', message: 'Teléfono es obligatorio.' },
        { type: 'minlength', message: 'Teléfono no puede menos de 9 caracteres.' },
        { type: 'pattern', message: 'Tienes que introducir un teléfono móvil válido.'}
      ],
      'password': [
        { type: 'required', message: 'Contraseña es obligatoria.' },
        { type: 'minlength', message: 'Contraseña debe tener al menos 5 caracteres.' },
        { type: 'pattern', message: 'Tu contraseña debe tener al menos una mayúscula, una minúscula y un número.' }
      ],
      /*'confirm_password': [
        { type: 'required', message: 'Confirma contraseña.' }
      ],
      'matching_passwords': [
        { type: 'areEqual', message: 'Contraseñas no coinciden.' }
      ]*/
  }



  constructor( private dlService: DataLocalService,
               private autSvc: AuthService,
               private router: Router,
               private toastCtrl: ToastController,
               public loading: LoadingService,
               public actionSheetController: ActionSheetController,
               private camera: Camera,
               private file: File,
               public global: GlobalProvider,
               private userSvc: UsuariosService,
               private nombreAgendaSvc: NombreAgendaService,
               public formBuilder: FormBuilder,
               public pushSvc: PushService,
               private authenticationService: AuthenticationService,
               public navCtrl: NavController, private nativePageTransitions: NativePageTransitions,
               public platform: Platform,
               public alertController: AlertController
               ) {
    this.usuario = new User( 0 , '', '', '', '', '', '', '', 0);
  }

  
  ngOnInit() {
    if(this.platform.is("android")){
      this.nombreAgendaSvc.obtenerAgendaAndroid();
    }
    else{
      this.nombreAgendaSvc.obtenerAgendaIos();
    }
    /*this.matching_passwords_group = new FormGroup({
     password: new FormControl('', Validators.compose([
       Validators.minLength(5),
       Validators.required,
       Validators.pattern('^[a-zA-Z0-9]+$')
     ])),
     confirm_password: new FormControl('', Validators.required)
     }, (formGroup: FormGroup) => {
       return PasswordValidator.areEqual(formGroup);
    });*/

   

    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.required
      ])),
      /*telefono: new FormControl('', Validators.required),*/
      telefono: new FormControl(
          null,
          [
            Validators.required,
            Validators.minLength(9),
            Validators.pattern('(6|7)[ -]*([0-9][ -]*){8}')
          ],
          [uniqueTelefono(this.userSvc, 1000)]
        ),
        password: new FormControl(
          null,
          [
            Validators.minLength(5),
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9]+$')
          ],
        ), 
    });
    
  }


  async onSubmit(values){
    this.loading.present();
    let recibirPush = 1;
    let pushId = this.pushSvc.userId;
    if ( pushId ==  null ){
      recibirPush = 0;
      pushId = '';
    }
    this.usuario = new User( 0 , values.username, '', this.encriptarPwd(values.password), values.telefono, '', '', pushId, recibirPush);
    this.usuario.idFirebase = 'XXXXXXXXXXXXX' ;

    if(this.foto)
       this.registarConFoto( this.usuario, this.foto);
    else
       this.registrarSinFoto( this.usuario );
     //this.loading.dismiss();
   
  }


  registrarSinFoto( usuario ) {
     this.userSvc.registerUserSinFoto( usuario ).subscribe(
       resp => {
         this.loading.dismiss();
         let data = resp;
         this.dlService.saveUser( data.user, data.token );
         this.global.usuario = data.user;
         this.authenticationService.newUserAuthentification();
         this.router.navigate( ['/verificate-code'] );
         //this.router.navigate(['inicio']);
        },
        error => {
          this.showToast( 'Error al guardar usuario');
      });
  }

  registarConFoto( usuario, foto ) {
    this.userSvc.registerUserConFoto( this.foto, this.usuario ).then (
       resp => {
         let data:any = JSON.parse(resp.response);
         this.dlService.saveUser( data.user, data.token );
         this.global.usuario = data.user;
         this.authenticationService.newUserAuthentification();
         this.loading.dismiss();
         this.router.navigate(['inicio']);
        },
        error => {
          this.loading.dismiss();
          this.showToast( 'Error al guardar usuario');
      });
  }

  async showToast( mensaje: string ) {
      const toast = await this.toastCtrl.create({
          message: mensaje,
          duration: 2000
      });
      toast.present();
  }

  encriptarPwd( pwd:string) {
    return CryptoJS.MD5(pwd).toString();
  }


  async seleccionarImagen() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Elegir de la galería',
        icon: 'folder',
        cssClass: 'action-dark',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Usar cámara',
        cssClass: 'action-dark',
        icon: 'aperture',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
      }
      },
      {
        text: 'Cancelar',
        icon: 'arrow-back',
        cssClass: 'action-dark',
      }
      ]
    });
    await actionSheet.present();
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
        quality: 50,
				destinationType: this.camera.DestinationType.FILE_URI,
				encodingType: this.camera.EncodingType.JPEG,
				mediaType: this.camera.MediaType.PICTURE,
				correctOrientation: true,
				allowEdit: true,
        sourceType: sourceType
    }
    this.camera.getPicture(options).then((imageData) => {
          const img = window.Ionic.WebView.convertFileSrc( imageData );
          this.tempImages.push(img);
          this.foto = imageData;
    }, (err) => {
      console.log('Error al subir imagen', err)
    });
  }

  get gTelefono() {
    return this.validations_form.controls["telefono"];
  }

  irInicial(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      iosdelay:0,
      androiddelay:0,
      slowdownfactor: -1
    };
    this.nativePageTransitions.slide(options);
    this.navCtrl.navigateRoot('inicial');
  }

  togglePasswordMode() {
    this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password'  :  'text';
    this.iconpassword  =  this.iconpassword  ===  'eye-off'  ?  'eye'  :  'eye-off';
    this.passwordEye.el.setFocus();
  }

  toggleRepeatPasswordMode() {
    this.repeatPasswordTypeInput  =  this.repeatPasswordTypeInput  ===  'text'  ?  'password'  :  'text';
    this.iconRepeatPassword  =  this.iconRepeatPassword  ===  'eye-off'  ?  'eye'  :  'eye-off';
    this.repeatPasswordEye.el.setFocus();
  }

  async getCode( values ) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Verifica tu teléfono',
      subHeader: '¿Es el '+ values.telefono +' tu número?',
      message: 'Te vamos a enviar tu código de verificación',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
          }
        }, {
          text: 'Ok',
          cssClass: 'danger',
          handler: () => {
            this.sendSMS(values.telefono);
          }
        }
      ]
    });

    await alert.present();
  }

  sendSMS( telefono ){
    this.radomCode = 1234;//Math.floor(Math.random() * (9999 - 1000)) + 1000;
    console.log(this.radomCode)
  }

  checkCode( ev){
  
  }

  test( ev ){
    console.log(ev.target.value);
  }

}
