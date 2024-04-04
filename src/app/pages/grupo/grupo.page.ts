import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GruposService } from '../../services/grupos.service';
import { LoadingService } from '../../services/loading.service';
import { Grupo } from 'src/app/models/grupo';
import { MycurrencyPipe } from '../../pipes/mycurrency.pipe';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.page.html',
  styleUrls: ['./grupo.page.scss'],
})
export class GrupoPage implements OnInit {

  id = null;
  grupo: Grupo;

  constructor( private activatedRoute: ActivatedRoute,
               private grupoSvc: GruposService,
               public loading: LoadingService ) {
        this.grupo = new Grupo(null, '', '',null,null, 0, null, 0, 0);
 }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getGrupo( this.id );
  }

  getGrupo( idGrupo ) {
    this.loading.present();
    this.grupoSvc.getGrupo( idGrupo ).subscribe(
      resp => {
        this.grupo = resp;
        this.loading.dismiss();
      },
      error => {
        this.loading.dismiss();
      }
    )
  }

}
