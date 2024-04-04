import { Component, OnInit, Input } from '@angular/core';


import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastController, ModalController, Platform } from '@ionic/angular';
import { LoadingService } from '../../services/loading.service';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  myContacts = [];
  myContactsShow: any[] = [];

  numMostrado = 0;
  siguientes = 0;

  constructor( private contacts: Contacts,
               private platform: Platform,
               public loadingElem: LoadingService,
               private toastCtrl: ToastController ) {

  }

  ngOnInit() {
    if(this.platform.is("android")){
      this.getContactsAgendaAndroid();
    }else{
      this.getContactsAgendaIos();
    }
  }



  getContactsAgendaIos(){

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
            contact["phoneNumber"]= mobile;
            contact["email"] = ';'
            this.myContacts.push(contact);
          }
      }
      }
    });
    setTimeout(() => {
      resolve('Resuelto');
    }, 2000);
    });
  }

  getContactsAgendaAndroid() {
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
                contact["phoneNumber"] = mobile//contacts[i].phoneNumbers[0].value;
                contact["email"] = ';'
                this.myContacts.push(contact);
              }
            }
        }
    });
    setTimeout(() => {
      resolve('Resuelto');
    }, 2000);
    });
  }

}
