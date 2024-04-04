import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.page.html',
  styleUrls: ['./policy.page.scss'],
})
export class PolicyPage implements OnInit {

  constructor( private modalCtrl: ModalController, 
      public navCtrl: NavController,
      private iab: InAppBrowser, 
      public platform: Platform ) { }

  ngOnInit() {
  }

  accept( ){
    //console.log('Aceptamos');
    //this.modalCtrl.dismiss();
    this.navCtrl.navigateRoot('register');
  }

  openPoliticy(){
    if(this.platform.is("android")){
      const browser = this.iab.create('https://fabrikapps.es/zent/privacy-policy-android.html', '_blank');
      browser.show();
    }
    else{
      const browser = this.iab.create('https://fabrikapps.es/zent/privacy-policy-ios.html', '_blank');
      browser.show();
    } 
  }

  irInicial() {
    this.navCtrl.navigateRoot('inicial');
  }

}
