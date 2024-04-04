import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../models/user';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  usuario: User;

  constructor(  private storage: Storage,
                private userSvc: UsuariosService,
                private router: Router) {
    //this.getUser();
  }

  saveUser( user: User, token?: string ) {
    this.usuario = user;
    //this.usuario.password = user.password;
    this.storage.set( 'user', user );
    this.storage.set(TOKEN_KEY, token);
  }


  async getUser() {
    this.storage.get("user").then( (user) =>
    {
      this.usuario = user;
      if( user ){
        //no-email this.userSvc.getUserByEmail( this.usuario.email ).subscribe(
        this.userSvc.getUserByTelefono( this.usuario.telephone ).subscribe(
          resp => {
            console.log('usuario:', resp)
            if (resp)
              this.usuario.id = resp.id;
          }
        )
      }
    });
  }

  deleteUser() {
    this.storage.remove('user')
      .then(
        data => this.router.navigateByUrl('/login'),
        error => console.error(error)
      );
  }



}
