import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { UsuariosService } from '../services/usuarios.service';
import { GlobalProvider } from "../providers/global";
import { Contacts, Contact, ContactField, ContactName, ContactFieldType,
         ContactFindOptions, IContactFindOptions } from '@ionic-native/contacts/ngx';
import { GruposService } from '../services/grupos.service';
import { Platform } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class NombreAgendaService {

  userGrupoTlf: string[] = [];
  usersNotName: string[] = [];
  agenda: any[] = [];
  myContacts: any[] = [];
  newContactNames: any[] = [];

  constructor( private userService: UsuariosService, public global: GlobalProvider,
               private contacts: Contacts, private grupoSvc: GruposService, public platform: Platform ) {
   }

/*
   obtenerAgendaAndroid( ){
     return new Promise(resolve2 => {
     this.contacts.find(
       ["displayName", "phoneNumbers"],
       {multiple: true, hasPhoneNumber: true}
       ).then((contacts) => {
         for (var i=0 ; i < contacts.length; i++){
           if(contacts[i].displayName !== null) {
             var contact = {};
             contact["name"]   = contacts[i].displayName;
             contact["phoneNumber"] = contacts[i].phoneNumbers[0].value.replace(/ /g, "").slice(-9);
             contact["email"] = ';'
             this.agenda.push(contact);
           }
         }
     });
     setTimeout(() => {
       resolve2('Reuelto');
     }, 2000);
     });
   }
*/

obtenerAgendaAndroid() {
  return new Promise(resolve => {
  let mobile;
  let name;
  this.contacts.find(
    ["displayName", "phoneNumbers"],
    {multiple: true, hasPhoneNumber: true}
    ).then((contacts) => {
      for (var i=0 ; i < contacts.length; i++){
        name = contacts[i].displayName;
        if(name!='' && name!=null) {
            if(contacts[i].phoneNumbers[0].value.slice(0,1)=='+' || contacts[i].phoneNumbers[0].value.slice(0,1)=='0'){
              mobile=contacts[i].phoneNumbers[0].value.replace(/[^a-zA-Z0-9+]/g, "");
            }
            else {
              mobile=contacts[i].phoneNumbers[0].value.replace(/[^a-zA-Z0-9]/g, "");
            }
            if(contacts[i].displayName !== null) {
              var contact = {};
              contact["id"] = i + 1 ;
              contact["name"] = contacts[i].displayName;
              contact["phoneNumber"] = mobile.replace(/ /g, "").slice(-9);//contacts[i].phoneNumbers[0].value;
              contact["email"] = ';'
              this.agenda.push(contact);
            }
          }
      }
  });
  setTimeout(() => {
    resolve('Resuelto');
  }, 2000);
  });
}

   obtenerAgendaIos(){

    let options = {
      filter: "",
      multiple: true,
      hasPhoneNumber: true,
      desiredFields: ["phoneNumbers", "name"],
    };

    return new Promise(resolve => {
     
      this.contacts.find( ['*'], options).then( (resp: any[]) => {
      let mobile;
      let name;
      for (var n=0 ; n < resp.length; n++){ 
        if( resp[n].phoneNumbers != null){
          name = resp[n].name.formatted;
          if(name!='' && name!=null) {
            
            if(resp[n].phoneNumbers[0].value.slice(0,1)=='+' || resp[n].phoneNumbers[0].value.slice(0,1)=='0'){
              mobile=resp[n].phoneNumbers[0].value.replace(/[^a-zA-Z0-9+]/g, "");
            }
            else {
              mobile=resp[n].phoneNumbers[0].value.replace(/[^a-zA-Z0-9]/g, "");
            }
            var contact = {}
            contact["id"] = n+1;
            contact["name"] = name;
            contact["phoneNumber"]= mobile.replace(/ /g, "").slice(-9);
            contact["email"] = ';'
            this.agenda.push(contact);
          }
      }
      }
    });
    setTimeout(() => {
      resolve('Resuelto');
    }, 2000);
    });
  }
 

  obtenerContactosNoAgendado( idGrupo) {
      return new Promise(resolve => {
          this.userService.getUserNoAgendByGroup( this.global.usuario.id, idGrupo).subscribe(
          resp => {
            resp.forEach(element => {
                    this.userGrupoTlf.push(element['telefono_usuario']);
                  });
                }
          );
          setTimeout(() => {
            resolve('Reuelto');
          }, 1000);
      });
  }

  async updateContactsNotName(){
    return new Promise(resolve => {
      this.userService.getUpdateUserNotName( this.global.usuario.id, this.global.usuario.telephone).subscribe(
      resp => 
      {
          resp.forEach(element => {
                this.usersNotName.push(element['telefono_agenda']);
              });
          this.updateNamesAgend( this.usersNotName );
      }
      );
      /* setTimeout(() => {
        resolve('Reuelto');
      }, 1000); */
    });
  }

  updateNamesAgend( userNotNameList ){
    if( userNotNameList.length > 0){
      if(this.platform.is("android")){
        this.obtenerAgendaAndroid();
      }
      else{
        this.obtenerAgendaIos();
      }
      // Buscamos en la agenda del telefono los contactos sin nombre
      userNotNameList.forEach(element => {
        const resultado = this.agenda.find( contacto => contacto.phoneNumber === element );
        if(resultado === undefined){
          console.log('not found ', element)
         }
         else{
           this.newContactNames.push(resultado);
         }
    });
    this.grupoSvc.updateNewNameAgend(this.newContactNames, this.global.usuario.id).subscribe(
      resp => console.log(resp)
    )
      
    }
  }

  guardarContactoAgendaLocal() {
    this.userGrupoTlf.forEach(element => {
        const resultado = this.agenda.find( contacto => contacto.phoneNumber === element );
        if(resultado === undefined || resultado == null || resultado == ''){
          let con = {
             name: '@' + element,
             phoneNumber: element
           }
           this.myContacts.push(con);
         }
         else{
           this.myContacts.push(resultado);
         }
    });
    this.grupoSvc.guardarNuevoParticipanteGrupo(this.myContacts, this.global.usuario.id).subscribe(
      resp => console.log(resp)
    )
  }



  async saveMyNames( idGrupo) {
    const result = await this.obtenerContactosNoAgendado( idGrupo);
    if( this.userGrupoTlf.length > 0){
      if(this.platform.is("android")){
        const result2 = await  this.obtenerAgendaAndroid();
      }
      else{
        const result2 = await  this.obtenerAgendaIos();
      }
      this.guardarContactoAgendaLocal();
    }
  }


}
