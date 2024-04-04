import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GlobalProvider } from "../../providers/global";
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { verificateCode } from '../../validators/telefono.validator';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-verificate-code',
  templateUrl: './verificate-code.page.html',
  styleUrls: ['./verificate-code.page.scss'],
})
export class VerificateCodePage implements OnInit {

  verificate_code_form: FormGroup;
  disabledButton = false;
  showCountdown = false;
  countDownNumber = 30;
  timer: any;

  validation_messages = {
    'code': [
      { type: 'required', message: 'Teléfono es obligatorio.' },
      { type: 'minlength', message: 'Teléfono no puede menos de 9 caracteres.' },
    ]
  }

  constructor( private navCtrl: NavController, public alertController: AlertController, private router: Router,
               public global: GlobalProvider, public formBuilder: FormBuilder, private userSvc: UsuariosService,
               private toastCtrl: ToastController ) { }

  ngOnInit() {

    this.verificate_code_form = this.formBuilder.group({
      code: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(4),
        ],
        [verificateCode(this.userSvc, 1000, this.global.usuario.telephone)]
      )
    });


  }


  onSubmit(){
    this.global.usuario.verificate_code = 1;
    this.userSvc.updateUSerVerificate( this.global.usuario.id).subscribe(
      (resp: any) => {
        this.router.navigate(['inicio']);
      }
    )
  }

  async getCode( ) {
    let a = this.global.usuario.telephone;

    let showTelefono = [...a].reduce((p, c, i) => p += (i && !(i % 3)) ? " " + c : c, "");
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Verifica tu teléfono',
      subHeader: '¿Es el '+ showTelefono +' tu número?',
      message: 'Te vamos a enviar tu código de verificación',
      buttons: [
        {
          text: 'Editar',
          role: 'cancel',
          handler: (blah) => {
            this.goBack();
          }
        }, {
          text: 'Ok',
          cssClass: 'danger',
          handler: () => {
            this.sendSMS();
          }
        }
      ]
    });

    await alert.present();
  }

  async sendSMS(){
    this.disabledButton = true;
    this.showCountdown = true;
    this.countdown();
    this.userSvc.verificateCode( this.global.usuario.telephone, this.global.usuario.verificate_code ).subscribe(
      (resp: any) => {
        this.showToast(resp.message);
      }
    );
  }

  async showToast( mensaje: string ) {
    const toast = await this.toastCtrl.create({
        message: mensaje,
        duration: 2000
    });
    toast.present();
}


  get gCode() {
    return this.verificate_code_form.controls["code"];
  }

  goBack() {
    this.userSvc.removeUser( this.global.usuario.id).subscribe(
      (resp: any) => {
        this.navCtrl.back();
      }
    )
    
  }

  countdown(){
    this.countDownNumber = 30;
    this.timer = setInterval(() => {
      this.countDownNumber--;
      if( this.countDownNumber <= 0){
        clearInterval(this.timer);
        this.noRecivedSMS();
      }
     }, 1000);
  }  

  noRecivedSMS(){
    this.disabledButton = false;
    this.showCountdown = false;
  }

}
