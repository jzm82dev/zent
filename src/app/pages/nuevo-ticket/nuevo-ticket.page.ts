import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { ModalController, ActionSheetController } from '@ionic/angular';
import {formatDate} from '@angular/common';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PurchasesService } from '../../services/purchases.service';
import { Usuario } from '../../interfaces/interfaces';
import { UsuariosService } from '../../services/usuarios.service';
import { GlobalProvider } from "../../providers/global";
import { IonicSelectableComponent } from 'ionic-selectable';


@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.page.html',
  styleUrls: ['./nuevo-ticket.page.scss'],
})



export class NuevoTicketPage implements OnInit {

  imagen: any;
  ticket_form: FormGroup;
  hayImagenAdjunta = 0;
  usuariosGrupo: Usuario[] = [];
  idCreadorGasto: number = 0;
  participantesSelect: any[] = [];
  textoImgAdj = '';
  foto: any = null;
  esAdministrador: boolean = false;
  loadingImage: boolean = false;
  imageUpload: boolean = false;
  listener;
  default;

  validation_messages = {
     'telefonoCreadorGasto': [
       { type: 'required', message: 'Creador del gasto es obligatorio.' }
     ],
      'titulo': [
        { type: 'required', message: 'Título es obligatorio.' }
      ],
      'descripcion': [
        { type: 'required', message: 'Descripción es obligatorio.' }
      ],
      'importe': [
        { type: 'required', message: 'Importe es obligatorio.' }
      ],
      'fecha': [
        { type: 'required', message: 'Fecha es obligatorio.' }
      ],
      'participantes': [
        { type: 'required', message: 'Debe seleccionar al menos un participante.' }
      ],
    };

  nuevoTicket: Purchase;

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 25
  };

  userCreaTicket = {
    id: 0,
    name: '',
    telefono_usuario: '',
    email: ''
  }

  constructor( private modalCtrl: ModalController,
               public actionSheetController: ActionSheetController,
               public formBuilder: FormBuilder,
               private camera: Camera,
               public global: GlobalProvider,
               private userService: UsuariosService,
               private purchaseSevice: PurchasesService  ) {
                // this.nuevoTicket = new Purchase('', '', 1, null,  ''/*Date()*/, 0, null);
  }

  ngOnInit() {
    this.idCreadorGasto = this.global.usuario.id;
    if( this.global.grupo.id_user_creador === this.global.usuario.id )
        this.esAdministrador = true;
    var idUsuarioLogado = this.global.usuario.id;
    this.userCreaTicket.id = this.global.usuario.id;
    this.userCreaTicket.telefono_usuario = this.global.usuario.telephone;
    this.userCreaTicket.name = this.global.usuario.name;
    this.ticket_form = this.formBuilder.group({
      telefonoCreadorGasto: new FormControl(this.global.usuario.telephone, Validators.required),
      titulo: new FormControl('', Validators.compose([
        Validators.required
      ])),
    //  descripcion: new FormControl('', Validators.required),
      importe: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      participantes: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
    
    this.userService.getUserByGroup( this.global.grupo.id, this.global.usuario.id ).subscribe(
      resp => {
        this.usuariosGrupo = resp;
        if( this.global.grupo.id_user_creador === this.global.usuario.id ){
          this.usuariosGrupo.find( dato => dato.id == this.global.usuario.telephone ).name = 'Tú';
        }
        else{
          this.usuariosGrupo.find( dato => dato.id == this.global.usuario.telephone ).name = 'Tú';
          this.usuariosGrupo = this.usuariosGrupo.filter( dato => dato.id != idUsuarioLogado);
        }
      }
    );
    
  }

  saveTicket() {
    this.modalCtrl.dismiss({
       compra: this.nuevoTicket
     });
  }


  async onSubmit(values){
     this.nuevoTicket = new Purchase(values.titulo , /*values.descripcion*/'' , 1, values.importe,  values.fecha, 0, null, this.participantesSelect, this.imagen, values.telefonoCreadorGasto);
     this.modalCtrl.dismiss({
        compra: this.nuevoTicket,
        imagen: this.foto,
        hayImagen: this.hayImagenAdjunta,
        participantesSeleccionados: this.participantesSelect
      });
  }

  salir() {
    this.modalCtrl.dismiss();
  }

  local() {
    this.textoImgAdj = 'Imagen adjuntada';
  }


pickImage(sourceType) {
  this.loadingImage = true;
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
        this.textoImgAdj = '      Adjuntado';
        this.imageUpload = true;
        this.loadingImage = false;
        this.hayImagenAdjunta = 1;
        this.foto = imageData;
  }, (err) => {
    console.log('Error al subir imagen', err)
  });
}

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Load from Library',
        icon: 'folder',
        cssClass: 'action-dark',
        handler: () => {
        //  this.local();
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        cssClass: 'action-dark',
        icon: 'aperture',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
          //this.local();
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



  /*

  onSelectChange( event ) {
    this.participantesSelect = [];
    this.participantesSelect.push(...event.value);
  }

  */

   onSelectChange( event ) {
    this.participantesSelect = [];
    this.participantesSelect.push(...event.detail.value);
  }

  onSelectCreadorPor( event ){
    this.idCreadorGasto = event.id;
  }

}
