import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListaCompra } from '../models/lista-compra';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const listaCompraUrl = environment.urlListaCompra;
const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');


@Injectable({
  providedIn: 'root'
})
export class ListaCompraService {

  query = '';

  constructor( private http: HttpClient ) { }


  private ejecutarQuery( query: string ) {
       query = listaCompraUrl + query;
       return this.http.get<ListaCompra[]>(query);
  }

  getListas( idGrupo ) {
    return this.ejecutarQuery('?option=all&idGrupo=' + idGrupo);
  }

  guardarLista( listaCompra: ListaCompra) {
    this.query = listaCompraUrl;
    return this.http.post(this.query, 'json=' + JSON.stringify(listaCompra),  {headers} );
  }

  getListasPendientes( idGrupo ) {
    this.query = listaCompraUrl + '?option=pending&idGrupo=' + idGrupo;
    return this.http.get<any[]>(this.query);
  }

  getProductosLista( id ) {
    this.query = listaCompraUrl + `?id=` + id +'&option=productos_lista' ;
    return this.http.get<any[]>(this.query);
  }

  actualizarProductosLista( listaCompra: ListaCompra ){
    this.query = listaCompraUrl  ;
    return this.http.put<any[]>(this.query, 'json=' + JSON.stringify(listaCompra),  {headers} );
  }

  finalizarLista( listaCompra: ListaCompra ){
    this.query = listaCompraUrl  ;
    return this.http.put<any[]>(this.query, 'json=' + JSON.stringify(listaCompra),  {headers} );
  }

  eliminarLista( listaCompra: ListaCompra ){
    this.query = listaCompraUrl  ;
    return this.http.put<any[]>(this.query, 'json=' + JSON.stringify(listaCompra),  {headers} );
  }



}
