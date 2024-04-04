import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { Grupo } from 'src/app/models/grupo';
import { LoadingService } from '../../services/loading.service';
import { GlobalProvider } from "../../providers/global";
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { NombreAgendaService } from '../../services/nombre-agenda.service';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.page.html',
  styleUrls: ['./list-groups.page.scss'],
})
export class ListGroupsPage implements OnInit {

  grupos: Grupo[] = [];
  grupoSelected: Grupo[] = [];

  slideOptions = {
   allowSlidePrev: false,
   allowSlideNext: false
  };

  constructor( private grupoSvc: GruposService,
               public loading: LoadingService,
               public global: GlobalProvider,
               private nombreAgendaSvc: NombreAgendaService,
               private authService: AuthenticationService,
               public router: Router,
               private storage: Storage, 
               public platform: Platform) {
  }

  ngOnInit() {

  }

  

  async guardarContactos(){
    await this.nombreAgendaSvc.saveMyNames( 0 );
  }


  

  ionViewDidEnter() {
    this.guardarContactos();
    this.nombreAgendaSvc.updateContactsNotName();
    this.grupos = [];
    this.getGroups();
    this.global.grupo = null;
  }

 


  openGroup( idGrupo ){
    this.grupoSelected = this.grupos.filter( s => s.id == idGrupo );
    this.global.grupo = this.grupoSelected[0];
    this.grupos = [];
    this.router.navigate(['/tabs']);
  }

  newGroup() {
    this.grupos = [];
    this.router.navigate(['/nuevo-grupo']);
  }

  async getGroups() {
      this.loading.present();
      await this.storage.get('auth-token').then( token => {
        if( token ){
           this.grupoSvc.getGroupByUser( this.global.usuario.telephone, token ).subscribe(
            (resp: any) => {
              this.loading.dismiss();
              if(resp.status == 'success')
                this.grupos.push(...resp.grupos);
              else
                this.logout();
            },
            error => {
              this.loading.dismiss();
            }
          )
        }
        else{
          this.logout();
        }
      });



  }

    doRefresh( event ){
      setTimeout(() => {
        this.ionViewDidEnter();
        event.target.complete();
      }, 1500);
    }

    logout() {
      this.authService.logout();
    }




}
