import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage  } from '@ionic/storage';
import { GlobalProvider } from "../providers/global";

import { environment } from 'src/environments/environment';


const urlPushService = environment.urlPushService;
const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

@Injectable({
  providedIn: 'root'
})
export class PushService {

  query = '';
  userId: string;
  mensajes: OSNotificationPayload[] = [];
  notificacion: any = {
    userId: 0,
    notificacionId: '',
    title: '',
    body: '',
    additionalData: ''
  };
  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor( private http: HttpClient, private oneSignal: OneSignal,
               private storage: Storage, public global: GlobalProvider, ) {
        this.cargarMensajes();
  }

  configuracionInicial() {

    this.oneSignal.startInit('63bb8327-e09f-4a8f-9de3-c50ae2b1f7e8', '862107650504');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe( (noti) => {
     // do something when notification is received
     this.notificacionRecibida(noti);
     //this.savePush(noti).subscribe( resp => console.log(resp));
    });

    this.oneSignal.handleNotificationOpened().subscribe( async (noti) => {
      // do something when a notification is opened
      await this.notificacionRecibida( noti.notification );
      //this.savePush( noti.notification ).subscribe( resp => console.log(resp));
    });

    // Obtener id del subscriptor
    this.obtenerOneSingalUser();
    /*this.oneSignal.getIds().then( info => {
      this.userId = info.userId;
    })*/

    this.oneSignal.endInit();
  }


  async notificacionRecibida( noti: OSNotification ){

  await this.cargarMensajes();

  const payload = noti.payload;
  const existePush = this.mensajes.find(
      mensaje => mensaje.notificationID === payload.notificationID );

  if( existePush ) {
    return;
  }
  this.mensajes.unshift( payload );
  this.pushListener.emit( payload );
  await this.guardarMensajes();

  }

  guardarMensajes( ){
    this.storage.set('mensajes', this.mensajes);
  }

  async cargarMensajes() {
  this.mensajes = await this.storage.get('mensajes') || [];
  return this.mensajes;
  }

  async getMensajes() {
  await this.cargarMensajes();
  return [...this.mensajes];
  }

  async borrarMensajes() {
  await this.storage.remove('mensajes');
  this.mensajes = [];
  this.guardarMensajes();
  }

  sendPushParticipantes( participantes, tituloGrupo: string, usuarioCreador: string, idGrupo){
    this.query = urlPushService + '?function=sendPush&titulo=' + tituloGrupo + '&userName= '+ usuarioCreador +'&tipo=1&idUserEnviaNot=' + this.global.usuario.id + '&idGrupo= ' + idGrupo;
    return this.http.post(this.query, 'participantes=' + JSON.stringify(participantes),  {headers} );
  }

  sendPushParticipantesGasto( participantes, tituloGasto: string, usuarioCreadorName: string, cuantia, nombreGrupo, telefonoUsuariCreador ){
    this.query = urlPushService + '?function=sendPush&titulo=' + tituloGasto + '&userName= '+ usuarioCreadorName +'&telefonoCreador='+ telefonoUsuariCreador +'&tipo=2&importe=' + cuantia + '&nombreGrupo=' + nombreGrupo + '&idUserEnviaNot=' + this.global.usuario.id + '&idGrupo= ' + this.global.grupo.id;
    return this.http.post(this.query, 'participantes=' + JSON.stringify(participantes),  {headers} );
  }

  sendPushParticipantesMoroso( tituloGrupo: string, participante, deuda,  solicitante: string){
    this.query = urlPushService + '?function=sendPush&nombreGrupo=' + tituloGrupo + '&tipo=3&deuda=' + deuda + '&solicitante=' + solicitante + '&idUserEnviaNot=' + this.global.usuario.id + '&idGrupo= ' + this.global.grupo.id;
    return this.http.post(this.query, 'participantes=' + JSON.stringify(participante),  {headers} );
  }

  sendPushParticipantesPagado( tituloGrupo: string, participante, deuda,  solicitante: string){
    this.query = urlPushService + '?function=sendPush&nombreGrupo=' + tituloGrupo + '&tipo=4&deuda=' + deuda + '&solicitante=' + solicitante + '&idUserEnviaNot=' + this.global.usuario.id + '&idGrupo= ' + this.global.grupo.id;
    return this.http.post(this.query, 'participantes=' + JSON.stringify(participante),  {headers} );
  }
  

  savePush( noti: OSNotification ) {
    const payload = noti.payload;
    this.notificacion.userId = this.global.usuario.id;
    this.notificacion.notificacionId = payload.notificationID;
    this.notificacion.title = payload.title;
    this.notificacion.body = payload.body;
    this.notificacion.additionalData = payload.additionalData
    this.query = urlPushService + '?function=save' ;
    return this.http.post(this.query, 'notificacion=' +  JSON.stringify(this.notificacion) ,  {headers} );
  }

  sendMensaje(){
    this.query = urlPushService + '?function=probando' ;
    return this.http.post(this.query, '',  {headers} );
  }

  getAllNofificaciones(){
    this.query = urlPushService + '?function=getAllNotifications&userId=' + this.global.usuario.id;
    return this.http.get<any[]>( this.query );
  }

  getAllNofificacionesByGroup() {
    this.query = urlPushService + '?function=getNotificationsByGroup&userId=' + this.global.usuario.id + '&grupoId=' + this.global.grupo.id;
    return this.http.get<any[]>( this.query );
  }

  async obtenerOneSingalUser( ){
    this.oneSignal.getIds().then( info => {
      this.userId = info.userId;
    })
  }

}
