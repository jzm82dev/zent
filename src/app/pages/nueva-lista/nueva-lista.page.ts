import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, LoadingController, ToastController, ModalController } from '@ionic/angular';
import { CategoriasService } from '../../services/categorias.service';
import { LoadingService } from '../../services/loading.service';
import { ProductosService } from '../../services/productos.service';
import { ListaCompraService } from '../../services/lista-compra.service';
import { Categoria } from '../../interfaces/interfaces';
import { ListaCompra } from 'src/app/models/lista-compra';
import { Producto } from 'src/app/models/products';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PipesModule } from "../../pipes/pipes.module";
import { GlobalProvider } from "../../providers/global";

@Component({
  selector: 'app-nueva-lista',
  templateUrl: './nueva-lista.page.html',
  styleUrls: ['./nueva-lista.page.scss'],
})
export class NuevaListaPage implements OnInit {

  @ViewChild(IonSegment , {static: true}) segmentCategorias: IonSegment;
  categorias: Categoria[] = [];
  productos: Producto[] = [];
  productosShow: Producto[] = [];
  productosManuales: Producto[] = [];

  productoManual: Producto;
  nombre: string;

  textoBusqueda: string;
  mostrar: boolean;

  listaCompra: ListaCompra;
  titulo: string;

  slideOptions = {
   allowSlidePrev: false,
   allowSlideNext: false
  };

  constructor( private loadingCtrl: LoadingController,
               private catSvc: CategoriasService,
               private productosSvc: ProductosService,
               private listaCompraSvc: ListaCompraService,
               private toastCtrl: ToastController,
               private modalCtr: ModalController,
               public global: GlobalProvider,
               public loading: LoadingService  ) {
      this.listaCompra = new ListaCompra(0, '', 0, [], [], '', 0, '', global.grupo.id);
      this.mostrar = true;
  }

  ngOnInit( ) {
    this.loading.present();
    this.cargarCategorias();
    this.obtenerProductos();
    this.segmentCategorias.value = '0';
  }


  obtenerProductos() {
    this.loading.present();
    this.productosSvc.getProductos().subscribe(
      resp =>{
        this.productos.push(...resp);
        this.productosShow = this.productos;
        this.loading.dismiss();
      },
      error => {
        this.loading.dismiss();
      }
    );
  }

  cargarCategorias( ) {
    this.catSvc.getCategorias()
    .subscribe(
      resp => {
          this.categorias.push( resp );
          this.loading.dismiss();
      },
      error => {
         this.loading.dismiss();
       }
    );
  }

  cambioCategoria( event ) {
    this.mostrar = true;
    if( event === '100' ){
        this.productosShow = this.productosManuales;
        this.segmentCategorias.value = '100';
        this.mostrar = false;
    }
    else{
      if ( event.detail.value === '0' ) {
        this.productosShow = this.productos;
      } else if(event.detail.value === '100') {
        this.productosShow = this.productosManuales;
        this.mostrar = false;
        } else{
          this.productosShow = this.productos.filter( s => s.id_categoria === event.detail.value);
      }
    }
  }



  seleccionado( event) {
    if(event.selected === true){
      if (!this.listaCompra.productos.includes(event.id)){
        this.listaCompra.productos.push(event.id);
      }
    }
    else{
      if( event.id != null ){
        this.listaCompra.productos = this.listaCompra.productos.filter(
          function(i) { return i !== event.id });
      }
      else{
        this.listaCompra.productosManuales = this.listaCompra.productosManuales.filter(
          function(i) { return i !== event.nombre });
      }
    }
    this.textoBusqueda = '';
    //document.getElementById('textSearchbar').value = '';
  }

  guardarLista(){
    this.modalCtr.dismiss({
       lista: this.listaCompra
     });
   }

  async showToast( mensaje: string ) {
    const toast = await this.toastCtrl.create({
        message: mensaje,
        duration: 2000
    });
    toast.present();
  }

  search( event ) {
    this.textoBusqueda = event.detail.value;
  }

  agregarProductoManual() {
    this.productoManual = new Producto(null, this.nombre, 100, true);
    this.productosManuales.push( this.productoManual );
    this.listaCompra.productosManuales.push(this.nombre);
    this.nombre = '';
    this.textoBusqueda = '';
    this.showToast('Producto añadido manualmente');
  }

  salir() {
    this.modalCtr.dismiss();
  }


}
