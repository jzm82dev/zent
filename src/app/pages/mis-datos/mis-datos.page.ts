import { Component, OnInit } from '@angular/core';
import { GlobalProvider } from "../../providers/global";
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UsernameValidator } from '../../validators/username.validator';
import { PasswordValidator } from '../../validators/password.validator';
import { ToastController, ModalController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';
import { LoadingService } from '../../services/loading.service';
import * as CryptoJS from 'crypto-js';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

const urlImages = environment.urlImages;
declare var window: any;

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.page.html',
  styleUrls: ['./mis-datos.page.scss'],
})
export class MisDatosPage implements OnInit {

  usuario: User;
  tempImages: string[] = [];
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  foto: any = null;
  password = '';
  cambiamosFoto = false;

  validation_messages = {
      'username': [
        { type: 'required', message: 'Nombre es obligatorio.' },
        { type: 'maxlength', message: 'Username no puede tener más de 25 caracteres.' },
        { type: 'validUsername', message: 'Tu username está ya siendo usado. Por favor elija otro.' }
      ],
      /*'email': [
        { type: 'required', message: 'Email es obligatorio.' },
        { type: 'pattern', message: 'Por fafor, introduce un email válido.' }
      ],*/
      'telefono': [
        { type: 'required', message: 'Teléfono is obligatorio.' }
      ],
      'password': [
      { type: 'required', message: 'Contaseña es obligatoria.' },
      { type: 'minlength', message: 'Contaseña debe tener al menos 5 caracteres.' },
      { type: 'pattern', message: 'Tu contraseña debe tener al menos una mayúscula, una minúscula y un número.' }
      ],
      'confirm_password': [
        { type: 'required', message: 'Confirma contraseña.' }
      ],
      'matching_passwords': [
        { type: 'areEqual', message: 'Contraseñas no coinciden.' }
      ]
  }


  constructor( public global: GlobalProvider, public formBuilder: FormBuilder,
               public actionSheetController: ActionSheetController, private camera: Camera,
               public loading: LoadingService, private toastCtrl: ToastController,
               public navCtrl: NavController, private nativePageTransitions: NativePageTransitions,
               private userSvc: UsuariosService,private router: Router ) {
    this.usuario = new User( 0 , this.global.usuario.name, '', '', '', '', '', '', 0);
  }

  ngOnInit() {
      this.foto = urlImages + '/photos/'+ this.global.usuario.foto;
      this.matching_passwords_group = new FormGroup({
       password: new FormControl('Aa00000', Validators.compose([
         Validators.minLength(5),
         Validators.required,
         Validators.pattern('^[a-zA-Z0-9]+$')
       ])),
       confirm_password: new FormControl('Aa00000', Validators.required)
       }, (formGroup: FormGroup) => {
         return PasswordValidator.areEqual(formGroup);
      });
      this.validations_form = this.formBuilder.group({
        username: new FormControl( this.global.usuario.name , Validators.compose([
          UsernameValidator.validUsername,
          Validators.maxLength(25),
          Validators.required
        ])),
        telefono: new FormControl( {value: this.global.usuario.telephone,  disabled: true} , Validators.required),
        recibirPush: new FormControl( {
            value: this.global.usuario.recibir_push == 1 ? true : false,
            disabled:  this.global.usuario.oneSignalId != null ? false : true
        }),
       /* email: new FormControl( this.global.usuario.email , Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),*/
        matching_passwords: this.matching_passwords_group
      });
    }

    async cambiaFoto() {
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


    pickImage( sourceType ) {
      const options: CameraOptions = {
        quality: 30,
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
            this.cambiamosFoto = true;
      }, (err) => {
        console.log('Error al subir imagen', err)
      });
    }

    async onSubmit(values){
      if( values.matching_passwords.password != 'Aa00000' )
          this.password = this.encriptarPwd(values.matching_passwords.password);
      else
          this.password = this.global.usuario.password;
      let recibePush = 0;
      if( values.recibirPush )
        recibePush = 1;
      this.usuario.recibirPush = recibePush;
      this.usuario = new User(this.global.usuario.id , values.username, '', this.password, this.global.usuario.telephone, '', '', this.global.usuario.oneSignalId, recibePush );
      if( this.cambiamosFoto )
        this.actualizarConFoto( this.foto, this.usuario );
      else{
        this.actuaizarSinFoto( this.usuario );
      }
    }

    async showToast( mensaje: string ) {
        const toast = await this.toastCtrl.create({
            message: mensaje,
            duration: 2000
        });
        toast.present();
    }

    actuaizarSinFoto( usuario ) {
      this.loading.present();
      this.userSvc.actualizaPerfilSinFoto( this.usuario ).subscribe(
        resp => {
          this.actualizarDatosGlobales( resp );
          this.showToast( 'Datos actualizados correctamente' );
          this.loading.dismiss();
          this.irInicio();
        },
        error => {
          this.loading.dismiss();
          this.showToast( 'Error al actualizar los datos' );
          this.irInicio();
        }
      )
    }

    actualizarConFoto( foto, usuario ) {
        this.userSvc.actualizaPerfilConFoto( this.foto, this.usuario ).then(
         data => {
           this.showToast( 'Datos actualizados correctamente' );
           var respuesta = JSON.parse(data.response);
           this.usuario.foto = respuesta.foto;
           this.usuario.id = respuesta.id;
           this.global.usuario.recibir_push = this.usuario.recibirPush;
           this.global.usuario = this.usuario;
           this.actualizarDatosGlobales(data.response)
           this.irInicio();
          },
          error => {
            this.loading.dismiss();
            this.showToast( 'Error al guardar usuario');
            this.irInicio();
        });
    }

    actualizarDatosGlobales( data ) {
      var respuesta = JSON.parse(data);
      this.global.usuario.name = this.usuario.name;
      //this.global.usuario.email = this.usuario.email;
      this.global.usuario.recibir_push = this.usuario.recibirPush;
      this.global.usuario.password = this.usuario.password;
    }



    encriptarPwd( pwd:string) {
      return CryptoJS.MD5(pwd).toString();
    }


    irInicio() {
      let options: NativeTransitionOptions = {
        duration: 600
      };
      this.nativePageTransitions.fade(null);
      this.navCtrl.navigateRoot('inicio');
    }

    irInicio2() {
      let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 600,
        iosdelay:0,
        androiddelay:0
      };
      this.nativePageTransitions.flip(options);
      this.navCtrl.navigateRoot('inicio');
    }



}
