import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage';
// Registro
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { PipesModule } from './pipes/pipes.module';
import { IonicGestureConfig } from "../utils/IonicGestureConfig";

// Atach image (photo or galery)
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';


import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

// GlobalProvider
import { GlobalProvider } from "./providers/global";

// contacts
import { Contacts } from "@ionic-native/contacts/ngx";

// select searchbar
import { IonicSelectableModule } from 'ionic-selectable';


// ng NgModule
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';


// Push
import { OneSignal } from '@ionic-native/onesignal/ngx';

// Efects
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
              BrowserModule,
              ReactiveFormsModule,
              IonicModule.forRoot(),
              AppRoutingModule,
              PipesModule,
              HttpClientModule,
              AngularFireModule.initializeApp(environment.firebaseConfig),
              AngularFireAuthModule,
              IonicSelectableModule,
              NgSelectModule,
              FormsModule,
              IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    FileTransfer,
    PhotoViewer,
    Contacts,
    SocialSharing,
    GlobalProvider,
    ImagePicker,
    NativePageTransitions,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'HAMMER_GESTURE_CONFIG', useClass: IonicGestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
