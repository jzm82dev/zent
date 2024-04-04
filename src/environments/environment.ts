// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlUser: 'http://localhost/ZentAPI/users.php',
  urlPurchase: 'http://localhost/ZentAPI/purchases.php',
  urlCategorias: 'http://localhost/ZentAPI/categorias.php',
  urlProductos: 'http://localhost/ZentAPI/productos.php',
  urlListaCompra: 'http://localhost/ZentAPI/lista_compra.php',
  urlGrupos: 'http://localhost/ZentAPI/grupos.php',
  urlRegister: 'http://localhost/ZentAPI/register.php',
  urlPushService: 'http://localhost/ZentAPI/push.php',
  urlImages:'http://localhost/ZentAPI/',
  urlSendSMS:'http://localhost/ZentAPI/sendSMS.php',
  firebaseConfig : {
    apiKey: 'AIzaSyBYT6dW-0ZBxZOB2127fUXwlfPcuSiAV_k',
    authDomain: 'compras-88540.firebaseapp.com',
    databaseURL: 'https://compras-88540.firebaseio.com',
    projectId: 'compras-88540',
    storageBucket: 'compras-88540.appspot.com',
    messagingSenderId: '862107650504',
    appId: '1:862107650504:web:47b4a2806dff223d6418fd',
    measurementId: 'G-TGKQQ22HL7'
  }
  /*urlUser: 'http://localhost/ComprasAPI/users.php',
  urlPurchase: 'http://localhost/ComprasAPI/purchases.php'*/

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
