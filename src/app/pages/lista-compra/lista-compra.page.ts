import { Component, OnInit, Input } from '@angular/core';
import { ListaCompra } from 'src/app/models/lista-compra';
import { ModalController, ToastController } from '@ionic/angular';
import { ListaCompraService } from '../../services/lista-compra.service';
import { Producto } from '../../interfaces/interfaces';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
})
export class ListaCompraPage implements OnInit {

  @Input() idLista: number;
  @Input() lista: any;
  productosLista: Producto[] = [];
  productosComprados: number[] = [];

  listaSeleccionada: any;
  listaActualizar: ListaCompra;

  constructor( private modalCtr: ModalController,
               private listaCompraSvc: ListaCompraService,
               private toastCtrl: ToastController,
               public loading: LoadingService ) {
      this.listaActualizar = new ListaCompra(null, '', 0, [],[], '', 0, '', 0);
  }

  ngOnInit() {
    this.loading.present();
    this.listaSeleccionada = this.lista[0];
    this.otenerProductos();
  }

  async showToast( mensaje: string ) {
    const toast = await this.toastCtrl.create({
        message: mensaje,
        duration: 2000
    });
    toast.present();
  }


  actualizarLista() {
    this.listaActualizar.id = this.idLista;
    this.listaActualizar.productos = this.productosComprados;
    this.modalCtr.dismiss({
       lista: this.listaActualizar
     });
  }

  otenerProductos() {
    this.listaCompraSvc.getProductosLista( this.idLista ).subscribe(
        resp =>
        {
          this.productosLista = resp;
          this.loading.dismiss();
        }
      );
  }

  comprado( event ) {
    if(event.selected === true){
      this.productosComprados.push(event.id);
    }
    else{
      this.productosComprados = this.productosComprados.filter(
        function(i) { return i !== event.id });
    }
  }

  salir() {
    this.modalCtr.dismiss();
  }

}
