import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastController, ModalController } from '@ionic/angular';
import { GlobalProvider } from "../../providers/global";
import { ContactoAgenda } from '../../models/contacto';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Grupo } from 'src/app/models/grupo';
import { GruposService } from '../../services/grupos.service';
import { LoadingService } from '../../services/loading.service';
import { PushService } from '../../services/push.service';
import { ContactosPage } from '../contactos/contactos.page';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from './../../services/authentication.service';
import { Platform } from '@ionic/angular';



import { Contacts, Contact, ContactField, ContactName, ContactFieldType,
         ContactFindOptions, IContactFindOptions } from '@ionic-native/contacts/ngx';


@Component({
  selector: 'app-nuevo-grupo',
  templateUrl: './nuevo-grupo.page.html',
  styleUrls: ['./nuevo-grupo.page.scss'],
})
export class NuevoGrupoPage implements OnInit {

  sasa_form: FormGroup;
  contactsFound = [];

  //agenda: any[] = [];
  nuevoGrupo: Grupo;

  ourType: ContactFieldType[] = ['displayName', 'phoneNumbers'];
  localContacto: ContactoAgenda;
  tipoGrupo = 0;

  validation_messages = {
      'titulo': [
        { type: 'required', message: 'Título es obligatorio.' }
      ],
      'descripcion': [
        { type: 'required', message: 'Descripción es obligatorio.' }
      ],
      'tipo': [
        { type: 'required', message: 'Tipo es obligatorio.' }
      ],
    };

  //  agenda: any[] = [];

    datosUserCreador2;
    datosUserCreador;



    agenda: any[] = [
      {
        id: 1,
        name: 'Hermana',
        phoneNumber: '+34 635 088 912',
        email: 'mariaz@gmail.com'
      },
      {
        id: 2,
        name: 'Mamen',
        phoneNumber: '+34676550085',
        email: 'mgotor41@gmail.com'
      },
      {
        id: 3,
        name: 'Pauli',
        phoneNumber: '679 015 532',
        email: 'motrriuno@gmail.com'
      },
      {
        id: 4,
        name: 'Jorge',
        phoneNumber: '626804645',
        email: 'jorge.zancada.moreno@gmail.com'
      },
    ];

    selected = [
      {
        phoneNumbers:'+34658478521',
        displayName: 'Pedro'
      }
    ];

    tipos: any[] =
    [
      {
        id: 1,
        nombre: 'Quedada'
      },
      {
        id: 2,
        nombre: 'Hogar'
      },
      {
        id: 3,
        nombre: 'Vacaciones'
      },
      {
        id: 4,
        nombre: 'Familia'
      },
      {
        id: 5,
        nombre: 'Otro'
      },
    ];

  participantes: any[] = [];
  contactosSelect: any[] = [];
  myContacts: Contact[] = [];

  contactList = [];

  constructor( public global: GlobalProvider,
               public formBuilder: FormBuilder,
               private contacts: Contacts,
               public loading: LoadingService,
               private toastCtrl: ToastController,
               private router: Router,
               public modalCtrl: ModalController,
               private grupoSvc: GruposService,
               private pushSvc: PushService,
               private storage: Storage,
               private authService: AuthenticationService,
               public platform: Platform
              ) {
      this.getContacts();
      //this.cargarContactosLocal();

       this.datosUserCreador =  {
           id: 0,
           name: this.global.usuario.name,
           phoneNumber: this.global.usuario.telephone,
           email: this.global.usuario.email
         };
       //this.contactosSelect.push(this.datosUserCreador);
  }



  ngOnInit() {
      this.sasa_form = this.formBuilder.group({
        titulo: new FormControl('', Validators.compose([
          Validators.required
        ])),
        descripcion: new FormControl( ),//descripcion: new FormControl('', Validators.required),
        tipo: new FormControl('', Validators.compose([
          Validators.required
        ])),
        listaCompra: new FormControl( )
      });
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
            this.contactList.push(contact);
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
                this.contactList.push(contact);
              }
            }
        }
    });
    setTimeout(() => {
      resolve('Resuelto');
    }, 2000);
    });
  }


  cargarContactosLocal() {
    this.contactList = this.agenda;
  }

  onSelectChange(event) {
    this.contactosSelect = [];
    this.contactosSelect.push(...event.value);
    //alert(JSON.stringify(this.contactosSelect, null, 4));
  }


  formatearContactos() {
    this.participantes.push(this.datosUserCreador);
    this.participantes.push(...this.contactosSelect);
  }

  async showToast( mensaje: string ) {
      const toast = await this.toastCtrl.create({
          message: mensaje,
          duration: 2000
      });
      toast.present();
  }

  onSelectType( event ) {
    this.tipoGrupo = event.detail.value;
  }

  async onSubmit(values){
      let aniadirLista = (values.listaCompra == true) ? 1 : 0;
      this.formatearContactos();
      this.nuevoGrupo = new Grupo(0, values.titulo, values.descripcion, '', '', this.global.usuario.id, this.participantes, this.tipoGrupo, aniadirLista);
      this.loading.present();
      
      this.storage.get('auth-token').then( token => {
        if (token) {
          this.grupoSvc.guardarGrupo( this.nuevoGrupo, token ).subscribe(
            (data: any) => {
                if( data.id != 0 ){
                  // Mandamos notificacion a los participantes
                   this.pushSvc.sendPushParticipantes( this.participantes, values.titulo, this.global.usuario.name, data.id).subscribe(
                     resp => console.log(resp));
                }
                 this.showToast( data.message );
                 this.loading.dismiss();
                 if( data.id != 0 )
                    this.router.navigate(['list-groups']);
                 else{
                    this.showToast( 'Error al añadir grupo' );
                    this.authService.logout();
                  }
             }, error => {
               this.showToast( 'Error al añadir grupo' );
               this.loading.dismiss();
           });
        }else{
          this.authService.logout();
        }
      })

  }

  ordenarArray(a, b) {
    // Use toUpperCase() to ignore character casing
      const bandA = a.name.toUpperCase();
      const bandB = b.name.toUpperCase();
      console.log(a.name.toUpperCase(),'/',b.name.toUpperCase())
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }


  async getContacts() {
    if(this.platform.is("android")){
      const result = await this.getContactsAgendaAndroid();
    }
    else{
      const result = await this.getContactsAgendaIos();
    }
    this.contactList.sort(this.ordenarArray);
    }

  mostrarLoading() {
      this.loading.present();
        setTimeout(() => {
          this.loading.dismiss();
        }, 1500);
    }


}
