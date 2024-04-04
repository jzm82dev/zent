import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingService } from '../../services/loading.service';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-resume-deuda-participante',
  templateUrl: './resume-deuda-participante.page.html',
  styleUrls: ['./resume-deuda-participante.page.scss'],
})
export class ResumeDeudaParticipantePage implements OnInit {

  @Input() participante;
  @Input() idGrupo;
  @Input() idUsuarioLogado;
  @Input() telefonoUsuarioLogado;

  deudasTotal: any[] = [];
  debe: any[] = [];
  leDeben: any[] = [];

  constructor( private modalCtrl: ModalController, public loading: LoadingService,
               private userService: UsuariosService ) { }

  ngOnInit() {
    this.getResumenParticipante();
  }


  getResumenParticipante( ){
    this.userService.resumenDeudasUsuario( this.idGrupo, this.idUsuarioLogado, this.participante.telefono_usu, this.participante.id )
    .subscribe( resp => {
        this.deudasTotal.push(... resp);
        this.debe = this.deudasTotal.filter(
              deuda => deuda.tipo == 1
        );
        this.leDeben = this.deudasTotal.filter(
              deuda => deuda.tipo == 2
        );
      });
  }

  closeModalDetalle() {
    this.modalCtrl.dismiss();
  }


}
