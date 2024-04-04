import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuariosService } from '../../services/usuarios.service';
import { GlobalProvider } from "../../providers/global";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

import { environment } from 'src/environments/environment';

const urlImages = environment.urlImages;

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.page.html',
  styleUrls: ['./imagen.page.scss'],
})
export class ImagenPage implements OnInit {

  @Input() ticket;
  urlImagen = '';
  participantes: any[] = [];
  urlFotoPerfil = '';


  constructor( private modalCtrl: ModalController, private userService: UsuariosService,
               public global: GlobalProvider, private photoViewer: PhotoViewer) { }

  ngOnInit() {
    var idUsuarioLogado = this.global.usuario.id;
    this.urlImagen = urlImages + '/uploads/'+ this.ticket.imagen;
    this.urlFotoPerfil = urlImages + '/photos/'+ this.ticket.foto;
    this.userService.getParticipantes ( this.ticket.id, this.global.grupo.id, this.global.usuario.id ).subscribe(
      resp => {
        this.participantes = resp;
        //this.participantes = this.participantes.filter( dato => dato.id != idUsuarioLogado);
      }
    );
  }

  viewPhoto() {
    console.log( this.urlImagen );
    this.photoViewer.show( this.urlImagen );
  }


  salir() {
    this.modalCtrl.dismiss();
  }

}
