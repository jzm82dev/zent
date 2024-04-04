import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { DataJsonService } from '../../services/data-json.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})


export class FaqPage implements OnInit {


    questions: any[] = [];
      /**
     * The data structure that will be used for supplying the accordion content
     * @public
     * @property technologies
     * @type {Array}
     */
    public technologies : Array<{ name: string, description: string, image: string }> = [
      { 
        name : '¿Qué es Zent?', 
        description : 'Zent es una aplicación que te ayuda a administrar los gastos realizados por las personas de un evento, lo que cada una ha pagado y lo que se le debe a cada participante.',
        image: '/assets/images/zent.png'
      },
      { 
        name : 'Zent', 
        description : 'Imagina que te vas de vacaciones a Tarifa con tus amig@s. Crearías un grupo llamado Vacaciones Tarifa. '+ 
                      'Ahora añades a los participantes de este viaje y el tipo de grupo que es, en este casa vacaciones. ' + 
                      'Ya podrán crear gastos los pariticipantes en ese grupo como por ejemplo: alojamiento, gasolina, cena del sábado...',
        image: '/assets/images/create-group.png'
      },
      { 
        name : 'React', 
        description : 'Popular front-end development framework from Facebook- can be enabled as an option for Ionic development',
        image: 'http://localhost/ZentAPI//uploads/6df645b4ab99d2e86a54f6a2b995aa3a.jpg'
      },
      { 
        name : 'TypeScript', 
        description : 'Superset of JavaScript that provides class based object oriented programming and strict data typing',
        image: 'assets/images/typescript-logo.png'
      },
      { 
        name : 'Imagen Pro', 
        description : 'Apache Cordova compatible plugins that allow native device API\'s to be utilised',
        image: 'https://fabrikapps.es/ZENT_API//uploads/606f6b396a94f7147782e894ed922684.jpg'
      },
      { 
        name : 'Capacitor', 
        description : 'Plugins for Progressive Web App and hybrid app development',
        image: 'assets/images/capacitor-logo.png'
      },
      { 
        name : 'StencilJS', 
        description : 'Custom web component development framework',
        image: 'assets/images/stencil-logo.png'
      },
      { 
        name : 'Sass', 
        description : 'CSS pre-processor development library',
        image: 'assets/images/sass-logo.png'
      },
      { 
        name : 'HTML5', 
        description : 'Markup language and front-end API support',
        image: 'assets/images/html5-logo.png'
      }
    ];


  constructor( public navCtrl: NavController, private nativePageTransitions: NativePageTransitions, private dataService: DataJsonService ) { }

  ngOnInit() {
    this.dataService.questionsData().subscribe(
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
