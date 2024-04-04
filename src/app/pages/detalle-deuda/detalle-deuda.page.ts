import { Component, OnInit, Input } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { IonItemSliding  } from '@ionic/angular';
import { ModalController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-deuda',
  templateUrl: './detalle-deuda.page.html',
  styleUrls: ['./detalle-deuda.page.scss'],
})
export class DetalleDeudaPage implements OnInit {

  @Input() deudor;
  @Input() idGrupo;
  @Input() idUsuarioLogado;
  @Input() opcion;
  @Input() telefonoUsuarioLogado;

  todasDeudas: any[] = [];
  deudasPagadas: any[] = [];
  deudasPendientes: any[] = [];
  meDebe: any[] = [];
  leDebo: any[] = [];
  meHaPagado: any[] = [];

  hayCambios = false;
  pre: string;
  mensaje: any;
  datosLeidos: number = 0;

  constructor( private grupoSvc: GruposService,
               private modalCtrl: ModalController, private alertCtrl: AlertController,
               private toastCtrl: ToastController ) { }

  ngOnInit() {
    this.grupoSvc.getDetalleTodasDeudasUsuario( this.deudor.telefono_usuario ,this.idGrupo, this.idUsuarioLogado, this.deudor.idUserCreador, this.telefonoUsuarioLogado ).subscribe(
        resp => {
            this.datosLeidos = 1;
            this.todasDeudas.push(... resp);
            this.meDebe = this.todasDeudas.filter(
              deuda => deuda.tipo == '1'
            );
            this.leDebo = this.todasDeudas.filter(
              deuda => deuda.tipo == '2'
            );
            this.meHaPagado = this.todasDeudas.filter(
              deuda => deuda.tipo == '3'
            );
          }
    )
  }


  async presentConfirmPagarDeduda( deuda, sliding: IonItemSliding ) {
   
    let mensaje = '¿Seguro que te ha pagado?';

    const alert = await this.alertCtrl.create({
     header: mensaje,
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
         handler: (blah) => {
         }
       }, {
         text: 'Ok',
         cssClass: 'danger',
         handler: () => {
           this.pagarDeuda(deuda, sliding);
         }
       }
     ]
   });

   await alert.present();
  }

  pagarDeuda( deuda, sliding: IonItemSliding ) {
    sliding.close();
    this.meDebe = this.meDebe.filter(d => d.id != deuda.id)
    this.grupoSvc.pagarDeuda( deuda ).subscribe(
      resp => {
        this.hayCambios = true;
        this.mensaje = JSON.parse(resp);
        this.showToast(this.mensaje.mensaje);
      }
    );
    this.meHaPagado.push( deuda );
  }

  closeModalDetalle() {
    this.modalCtrl.dismiss(
      {
        hayCambios: this.hayCambios
      }
    );
  //  this.ngOnInit();
  }

  async showToast( mensaje: string ) {
      const toast = await this.toastCtrl.create({
          message: mensaje,
          duration: 2000
      });
      toast.present();
  }

}
