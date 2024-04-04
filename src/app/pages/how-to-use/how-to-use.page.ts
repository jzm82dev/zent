import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { DataJsonService } from '../../services/data-json.service';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.page.html',
  styleUrls: ['./how-to-use.page.scss'],
})
export class HowToUsePage implements OnInit {

  questions: any[] = [];

  

  constructor( public navCtrl: NavController, private nativePageTransitions: NativePageTransitions, private dataService: DataJsonService ) { }

  ngOnInit() {
    this.dataService.howToUseData().subscribe(
      (data: any[]) => {
        this.questions = data;
      }
    )
  }

  public captureName(event: any) : void
  {
     console.log(`Captured name by event value: ${event}`);
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

}
