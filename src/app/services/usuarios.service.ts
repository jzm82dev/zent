import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { User } from "../models/user";
import { FileTransfer, FileUploadOptions, FileTransferObject  } from '@ionic-native/file-transfer/ngx';


const urlUsers = environment.urlUser;
const urlRegister = environment.urlRegister;
const urlSendSMS = environment.urlSendSMS;
const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  query = '';


  constructor( private http: HttpClient, private fileTransfer: FileTransfer ) { }

  // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
        'Access-Control-Allow-Methods' : 'POST'
      })
    };


  getUser() {
    this.query = urlUsers + '?function=users';
    return this.http.get<Usuario[]>( this.query );
  }

  getUserByGroup( idGrupo, idUser) {
    this.query = urlUsers + '?function=usersByGroup&idGrupo=' + idGrupo +'&userId= ' + idUser ;
    return this.http.get<Usuario[]>( this.query );
  }

  getUserNoAgendByGroup( idUsuario, idGrupo ) {
    this.query = urlUsers + '?function=usersByGroupNoAgenda&idUsuario='+ idUsuario + '&idGrupo=' + idGrupo;
    return this.http.get<string[]>( this.query );
  }

  getUpdateUserNotName( idUsuario, telefonoUsuario ){
    this.query = urlUsers + '?function=updateContactsNotName&idUsuario='+ idUsuario +'&telefono='+ telefonoUsuario;
    return this.http.get<string[]>( this.query );
  }

  getUserByEmail( email: string ){
    this.query = urlUsers + '?function=byEmail&email='+ email;
    return this.http.get<Usuario>( this.query );
  }

  getUserByTelefono( telefono: string ){
    this.query = urlUsers + '?function=byTelefono&telefono='+ telefono;
    return this.http.get<Usuario>( this.query );
  }
  

  login( userName: string, password: string, oneSignalId: string ) {
    //this.query = urlUsers + '?function=login&email=' + userName + '&pwd=' + password ;
    this.query = urlUsers + '?function=login&telefono=' + userName + '&pwd=' + password + '&oneSignalId=' + oneSignalId ;
    return this.http.get<any>( this.query );
  }

  getPagadoPorUsuario( idGrupo, idUser ): Observable<Usuario[]> {
    this.query = urlUsers + '?function=total&id=' + idGrupo +'&userId=' + idUser ;
    return this.http.get<Usuario[]>( this.query );
  }

  resumenDeudasUsuario( idGrupo, idUserLogado, telefonoUsuarioResumen, userId ) {
    this.query = urlUsers + '?function=resumen_deuda_participante&idGrupo=' + idGrupo +'&idUserLog= ' + idUserLogado + '&telefonoUserDeudas=' + telefonoUsuarioResumen + '&userId=' + userId ;
    return this.http.get<any[]>( this.query );
  }



  saveContacAgenda( contacto: any ){
    this.query = urlUsers;
    return this.http.post(this.query, 'json=' + JSON.stringify(contacto),  {headers} );
  }

  getParticipantes ( idTicket, idGrupo, idUsuarioLogado ) {
    this.query = urlUsers + '?function=participantes&idPurchase=' + idTicket + '&idGrupo=' + idGrupo + '&idUserLogado=' + idUsuarioLogado;
    return this.http.get<any[]>( this.query );
  }

  comprobarTelefono( telefono: string ): Observable<any> {
    this.query = urlUsers + '?function=existe_telefono&telefono=' + telefono ;
    return this.http.get( this.query );
  }

  checkVerificateCode( code: string, telefono: string ): Observable<any> {
    this.query = urlUsers + '?function=correct_code&telefono=' + telefono + '&code=' + code ;
    return this.http.get( this.query );
  }

  comprobarEmail( email: string): Observable<any> {
    this.query = urlUsers + '?function=existe_email&email=' + email ;
    return this.http.get( this.query );
  }

  recordarPassword( telefono :string ) {
    this.query = urlSendSMS + '?function=forgot_pass&telefono=' + telefono;
    return this.http.get( this.query );
  }

  verificateCode( telefono: string, code: string){
    this.query = urlSendSMS + '?function=verificate_code&telefono=' + telefono + '&code=' + code;
    return this.http.get( this.query );
  }

  updateUSerVerificate( idUser ) {
    this.query = urlUsers + '?function=verificateUser&user_id= ' + idUser ;
    return this.http.put( this.query, ' ' );
  }

  registerUserConFoto( img: string, nuevoUsuario ) {
        const options: FileUploadOptions = {
            fileKey : 'image',
            params: {
              'usuario' : nuevoUsuario
            }
        };
        const fileTransfer: FileTransferObject = this.fileTransfer.create();
        return fileTransfer.upload( img, urlRegister + '?option=nuevo_user', options );
  }

  registerUserSinFoto( nuevoUsuario ) {
    this.query = urlRegister + '?option=nuevo_user' ;
    return this.http.post<any>(this.query, 'usuario=' + JSON.stringify(nuevoUsuario),  {headers} );
  }

  removeUser( userId ){
    this.query = urlUsers + '?id=' + userId ;
    return this.http.delete( this.query );
  }

  actualizaPerfilSinFoto( usuario ) {
    this.query = urlRegister + '?usuario=' + JSON.stringify(usuario);
    return this.http.put( this.query, ' ',  {responseType: 'text'} );
  }

  actualizaPerfilConFoto( img: string, nuevoUsuario ) {
    let user = JSON.stringify(nuevoUsuario);
    const options: FileUploadOptions = {
        fileKey : 'image',
        params: {
          'usuario' : user
        }
    };
    
    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    return fileTransfer.upload( img, urlRegister + '?option=modificar_user', options );
  }

  checkOneSignalId( telefono: string ){
    this.query = urlUsers + '?function=tiene_onesignal_id&telefono=' + telefono ;
    return this.http.get( this.query );
  }

  getResumeDeudas( telefonoUsuario ){
    this.query = urlUsers + '?function=resumen_deuda&telefonoUsuario=' + telefonoUsuario ;
    return this.http.get<any[]>( this.query );
  }






}
