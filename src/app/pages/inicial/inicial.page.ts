import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})


export class InicialPage implements OnInit {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  
  sliderOne: any;

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  
  
  constructor( private nativePageTransitions: NativePageTransitions, public navCtrl: NavController, private iab: InAppBrowser, public platform: Platform) { 

    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
    };

  }

  ngOnInit() {
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(4000).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  irRegistro() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600,
      iosdelay:0,
      androiddelay:0
    };
    this.nativePageTransitions.flip(options);
    //this.navCtrl.navigateRoot('register');
    this.navCtrl.navigateRoot('policy');
  }

  login() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600,
      iosdelay:0,
      androiddelay:0
    };
    this.nativePageTransitions.flip(options);
    this.navCtrl.navigateRoot('login');

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

}
