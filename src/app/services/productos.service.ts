import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/app/models/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const categoriaUrl = environment.urlProductos;
const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient ) { }


  private ejecutarQuery( query: string ) {
     query = categoriaUrl + query;
     return this.http.get<Producto[]>(query);
  }

  getProductos() {
    return this.ejecutarQuery(`?option=all`);
  }

}
