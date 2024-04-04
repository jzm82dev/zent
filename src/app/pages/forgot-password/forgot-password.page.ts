import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { existEmail } from '../../validators/email.validator';
import { existeTelefono } from '../../validators/telefono.validator';
import { UsuariosService } from '../../services/usuarios.service';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from './../../services/authentication.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  recordar_pass_form: FormGroup;

  validation_messages = {
    'telefono': [
      { type: 'required', message: 'Teléfono es obligatorio.' },
      { type: 'minlength', message: 'Teléfono no puede menos de 9 caracteres.' },
    ]
  }


  constructor( public formBuilder: FormBuilder, private userSvc: UsuariosService,
               private toastCtrl: ToastController, private authService: AuthenticationService,
               public navCtrl: NavController, private nativePageTransitions: NativePageTransitions ) { }

  ngOnInit() {

    this.recordar_pass_form = this.formBuilder.group({
      telefono: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(9),
        ],
        [existeTelefono(this.userSvc, 1000)]
      )
    });

  }

  async showToast( mensaje: string ) {
      const toast = await this.toastCtrl.create({
          message: mensaje,
          duration: 2000
      });
      toast.present();
  }

  async onSubmit(values){
    this.userSvc.recordarPassword( values.telefono ).subscribe(
      (resp: any) => {
        this.showToast(resp.message);
        this.authService.logout();
      }
    );
  }

  get gEmail() {
    return this.recordar_pass_form.controls["email"];
  }

  get gTelefono() {
    return this.recordar_pass_form.controls["telefono"];
  }


  irLogin(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      iosdelay:0,
      androiddelay:0,
      slowdownfactor: -1
    };
    this.nativePageTransitions.slide(options);
    this.navCtrl.navigateRoot('login');
  }

}
