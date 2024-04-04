import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Compra, CompraNueva } from '../interfaces/interfaces';
import { FileTransfer, FileUploadOptions, FileTransferObject  } from '@ionic-native/file-transfer/ngx';

const urlPuchase = environment.urlPurchase;

const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');


@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  query = '';


  constructor( private http: HttpClient, private fileTransfer: FileTransfer ) {
  }

// Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
      'Access-Control-Allow-Methods' : 'POST'
    })
  };




  getPurchase() {
    this.query = urlPuchase + '?function=todas';
    return this.http.get<Compra[]>( this.query );
  }

  getPurchaseByGroup( idGrupo, token, idUserLogado ) {
    this.query = urlPuchase + '?function=porGrupo&idGrupo=' + idGrupo + '&authorization=' + token + '&userLogado=' + idUserLogado;
    return this.http.get<Compra[]>( this.query );
  }



  liquidarGastos( idGrupo, idUsuario ) {
    this.query = urlPuchase + '?idGrupo=' + idGrupo + '&idUsuario=' + idUsuario  ;
    return this.http.put( this.query, ' ',  {responseType: 'text'} );
  }

  deleteTicket( id, token ) {
    this.query = urlPuchase + '?id=' + id + '&authorization=' + token ;
    return this.http.put( this.query, ' ' );
  }

  payTicket( id, token ) {
    this.query = urlPuchase + '?function=pay&id=' + id + '&authorization=' + token ;
    return this.http.put( this.query, ' ' );
  }

  savePurchase( producto, token) {
    let nuevoTicket = JSON.stringify(producto);
    console.log(nuevoTicket)
    let params = 'json=' + nuevoTicket + '&authorization=' + token;
    this.query = urlPuchase;
    return this.http.post(this.query, params, {headers} );
  }

  uploadPhoto( formData ) {
    this.query = urlPuchase + '?function=uploadImage' ;
    return this.http.post(this.query, formData);
  }

  savePurchaseConFoto( img , producto, token ) {
    this.query = urlPuchase;
    let ticket = JSON.stringify( producto ); 
    const options: FileUploadOptions = {
        fileKey : 'image',
        params: {
          'json' : ticket,
          'authorization': token
        }
    };
    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    return fileTransfer.upload( img, this.query , options );
  }


}
