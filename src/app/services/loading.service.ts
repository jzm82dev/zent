import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

isLoading:any = false;

constructor(public loadingController: LoadingController) { }

async present() {
  this.isLoading = true;
  return await this.loadingController.create({
    message: 'Cargando datos',
    //translucent: false,
    duration: 5000,
    cssClass: 'my-loading'
  }).then(a => {
    a.present().then(() => {
      if (!this.isLoading) {
        a.dismiss().then(() => console.log('abort presenting'));
      }
    });
  });
}

async dismiss() {
  this.isLoading = false;
  return await this.loadingController.dismiss().then(() => console.log('dismissed'));
}

}
