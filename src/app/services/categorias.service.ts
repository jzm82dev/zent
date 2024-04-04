import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from '../interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const categoriaUrl = environment.urlCategorias;
const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor( private http: HttpClient ) { }


  private ejecutarQuery( query: string ) {
     query = categoriaUrl + query;
     return this.http.get<Categoria>(query);
  }

  getCategorias() {
    return this.ejecutarQuery(`?option=all`);
  }

}
