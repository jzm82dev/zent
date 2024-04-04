import { Component, OnInit } from '@angular/core';
import { PushService } from '../../services/push.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';
import { GlobalProvider } from "../../providers/global";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


const urlImages = environment.urlImages;

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {


  slideOptions = {
    allowSlidePrev: false,
    allowSlideNext: false
  }; 

  notificaciones: any[] = [];
  urlPhotos = urlImages + 'photos/';
  tipo: string;
  datosLeidos: number = 0;

  constructor( private pushSvc: PushService, private activatedRoute: ActivatedRoute,
    public navCtrl: NavController, private nativePageTransitions: NativePageTransitions,
    public global: GlobalProvider ) { }

  ngOnInit() {
    this.tipo = this.activatedRoute.snapshot.paramMap.get("tipo");
    if( this.tipo == 'todos' ){
      this.pushSvc.getAllNofificaciones().subscribe(
        (resp:any) => {
          this.notificaciones = resp.notificaciones ;
          this.datosLeidos = 1;
        }
      )
    }else{
      this.pushSvc.getAllNofificacionesByGroup().subscribe(
        (resp:any) => {
          this.notificaciones = resp.notificaciones ;
          this.datosLeidos = 1;
        }
      )
    }
  }

  ionViewDidEnter() {
    this.ngOnInit();
  }

  irInicio() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600,
      iosdelay:0,
      androiddelay:0
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.navigateRoot('inicio');
  }


  doRefresh( event ){
    setTimeout(() => {
      this.ionViewDidEnter();
      event.target.complete();
    }, 1500);
  }


}
