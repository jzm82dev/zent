import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Grupo } from 'src/app/models/grupo';
import { Usuario } from '../interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const grupoUrl = environment.urlGrupos;

/*
const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Api-key': `sudskjdsdhsdhsdhj`
  });
*/

const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

@Injectable({
  providedIn: 'root'
})
export class GruposService {



  constructor( private http: HttpClient ) {}


  getCustomHeaders(): HttpHeaders {
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Api-Key', 'xxx');
      return headers;
    }



  ejecutarQuery( query: string ) {
     query = grupoUrl + query;
     return this.http.get<Grupo[]>(query);
  }

  getGrupo( id ) {
    let query = grupoUrl + `?id=` + id ;
    return this.http.get<Grupo>(query);
  }

  getGrupos() {
    return this.ejecutarQuery(`?option=all`);
  }

  getUsersGroup( id ) {
    let query = grupoUrl + `?option=usuarios_por_grupo&id=` + id ;
    return this.http.get<Usuario[]>(query);
  }

  getGroupByUser( telefono, token ) {
    let query = grupoUrl + `?option=grupo_por_usuario&telefono=` + telefono + '&authorization=' + token ;
    return this.http.get<Grupo[]>(query);
  }

  getDeudoresByGroup( idUsuario, idGrupo, telefonoUsuario ) {
    let query = grupoUrl + `?option=deudores_grupo&idUsuario=` + idUsuario + '&idGrupo=' + idGrupo + '&telefonoUsuario=' + telefonoUsuario;
    return this.http.get<any[]>(query);
  }

  getDetalleDeudausuario( telefonoUsuario, idGrupo, idUsuario ) {
    let query = grupoUrl + `?option=detalle_me_debe_usuario&telefonoUsuario=` + telefonoUsuario + '&idGrupo=' + idGrupo + '&idUsuario=' + idUsuario ;
    return this.http.get<any[]>(query);
  }

  getDetalleDeboAusuario( telefonoUsuario, idGrupo, idCreadorGasto ) {
    let query = grupoUrl + `?option=detalle_debo_a_usuario&telefonoUsuario=` + telefonoUsuario + '&idGrupo=' + idGrupo + '&idCreadorGasto=' + idCreadorGasto ;
    return this.http.get<any[]>(query);
  }

  getDetalleTodasDeudasUsuario( telefonoUsuario, idGrupo, idUsuario, idCreadorGasto, telefonoUsuarioLogado ) {
    let query = grupoUrl + `?option=todas_deudas&telefonoUsuario=` + telefonoUsuario + '&idGrupo=' + idGrupo + '&idUsuarioLogado=' + idUsuario + '&idCreadorGasto=' + idCreadorGasto + '&telefonoUsuarioLoago=' + telefonoUsuarioLogado;
    return this.http.get<any[]>(query);
  }

  guardarGrupo( grupo: Grupo, token: string) {
    let nuevoGrupo = JSON.stringify(grupo);
    let params = 'json=' + nuevoGrupo + '&authorization=' + token;
    let query = grupoUrl;
    return this.http.post(query, params,  {headers} );
  }

/*
  guardarUsuariosGrupo( usuarios, idUsuarioLogueado) {
    let query = grupoUrl + '?function=usuariosNombre&idUser=' + idUsuarioLogueado;
    return this.http.post(query, 'json=' + JSON.stringify(usuarios),  {headers} );
  }
*/

  guardarNuevoParticipanteGrupo( usuarios, idUsuarioLogueado) {
    let query = grupoUrl + '?function=nuevoParticipante&idUser=' + idUsuarioLogueado;
    return this.http.post(query, 'json=' + JSON.stringify(usuarios),  {headers} );
  }

  updateNewNameAgend( usuarios, idUsuarioLogueado) {
    let query = grupoUrl + '?function=updateNameParticipante&idUser=' + idUsuarioLogueado;
    return this.http.post(query, 'json=' + JSON.stringify(usuarios),  {headers} );
  }

  addParticipantesGrupo( participantes, idGrupo, idUsuario ) {
    let query = grupoUrl + '?function=aniadirParticipantes&idGrupo=' + idGrupo + '&idUsuaioPadre=' + idUsuario;
    return this.http.post(query, 'json=' + JSON.stringify(participantes),  {headers} );
  }

  deleteParticipanteGrupo (telefonoParticipante, idGrupo, idUsuario) {
    let query = grupoUrl + '?function=eliminaParticipantes&idGrupo=' + idGrupo + '&telefonoParticipante=' + telefonoParticipante + '&idUser=' + idUsuario;
    return this.http.post(query, 'json=null',  {headers} );
  }

  borrarGrupo( idGrupo, token ) {
    let query = grupoUrl + '?idGrupo=' + idGrupo+ '&authorization=' + token ;
    return this.http.put( query, ' ' );
  }

  pagarDeuda( deuda ) {
    let query = grupoUrl + `?function=pagar_deuda&idDeuda=` + deuda.id + '&idTicket=' + deuda.idTicket + '&cantidad=' + deuda.count;
    return this.http.post(query, 'json=null',  {responseType: 'text'});
  }

  pagarTodasDeudas( telefonoCreador, telefonoUsuarioDeudor, idGrupo ) {
    let query = grupoUrl + `?function=pagar_todas_deuda&telefonoCreador=` + telefonoCreador + '&telefonoUsuarioDeudor=' + telefonoUsuarioDeudor + '&idGrupo=' + idGrupo;
    return this.http.post(query, 'json=null',  {responseType: 'text'});
  }

}
