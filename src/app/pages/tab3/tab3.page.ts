import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ModalController, IonSegment, ToastController } from '@ionic/angular';
import { NuevaListaPage } from '../nueva-lista/nueva-lista.page';
import { ListaCompraService } from '../../services/lista-compra.service';
import { LoadingService } from '../../services/loading.service';
import { ListaCompra } from 'src/app/models/lista-compra';
import { ListaCompraPage } from '../lista-compra/lista-compra.page';
import { GlobalProvider } from "../../providers/global";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  @ViewChild(IonSegment , {static: true}) segment: IonSegment;
  listas: ListaCompra[] = [];
  listasShow: ListaCompra[] = [];
  listaCompra: ListaCompra;
  nuevaListaCompra: any;
  idListaEliminar: number;

  slideOptions = {
   allowSlidePrev: false,
   allowSlideNext: false
 };

 eliminar: boolean;
 finalizar: boolean;


  constructor(  public modalCtrl: ModalController,
                private listaCompraSvc: ListaCompraService,
                private toastCtrl: ToastController,
                public global: GlobalProvider,
                public loading: LoadingService ) {
    this.eliminar = false;
    this.finalizar = false;
  }

  ngOnInit( idSegment? ) {
    this.segment.value = '0';
    if( idSegment== '1' ){
      this.listasShow = this.listas.filter( s => s.finalizada == idSegment );
      this.segment.value = idSegment;
    }
    this.cargarListasPendientes( idSegment );
  }


  async crearLista() {
    const modal = await this.modalCtrl.create({
      component: NuevaListaPage
    });

    await modal.present();

    this.nuevaListaCompra = await modal.onDidDismiss();
    if ( this.nuevaListaCompra.data ) {
      this.loading.present();
      this.listaCompraSvc.guardarLista( this.nuevaListaCompra.data.lista).
      subscribe(
          resp =>
          {
            this.showToast( 'Lista de la compra creada correctamente' );
            this.loading.dismiss();
            this.ngOnInit();
          },
          error =>
          {
            this.showToast( 'Error al crear la lista de la compra' );
            this.loading.dismiss();
          }
        );
    }
  }



  cargarListasPendientes( finalizada='0' ) {
    this.loading.present();
    this.listaCompraSvc.getListasPendientes( this.global.grupo.id )
    .subscribe(
      resp => {
          this.listas = resp;
          this.listasShow = this.listas.filter( s => s.finalizada.toString() === finalizada.toString() );
          this.loading.dismiss();
      },
      error => {
         this.loading.dismiss();
       }
    );
  }

  cambioTipoLista( event ){
    this.listasShow = this.listas.filter( s => s.finalizada === event.detail.value );
  }


  async abrirLista( id ) {
        const modal = await this.modalCtrl.create({
          component: ListaCompraPage,
          componentProps: {
            idLista : id,
            lista: this.listas.filter( s => s.id === id )
          }
        });
        await modal.present();

        this.nuevaListaCompra = await modal.onDidDismiss();
        if ( this.nuevaListaCompra.data ) {
          this.loading.present();
          this.listaCompraSvc.actualizarProductosLista( this.nuevaListaCompra.data.lista ).
          subscribe(
              resp =>
              {
                this.showToast( 'Lista de compra actualizada correctamente' );
                this.loading.dismiss();
                this.ngOnInit();
              },
              error =>
              {
                this.showToast( 'Error al actualizar lista la lista de la compra' );
                this.loading.dismiss();
              }
            );
        }
      }


    async showToast( mensaje: string ) {
      const toast = await this.toastCtrl.create({
          message: mensaje,
          duration: 2000
      });
      toast.present();
    }

    finalizarLista( idLista ) {
      this.pantallaNormal();
      this.loading.present();
      this.listaCompra = this.listas.find(element => element.id == idLista);
      this.listaCompra.finalizada = 1;
      this.listaCompraSvc.actualizarProductosLista( this.listaCompra ).subscribe(
        resp =>
          {
            this.showToast( 'Lista de la compra finalizada' );
            this.loading.dismiss();
            this.ngOnInit();
          },
        error => {
          this.showToast( 'Error al finalizar la lista de la compra' );
          this.loading.dismiss();
        }
      )
    }

    borrarLista( idLista ) {
      this.pantallaNormal();
      this.loading.present();
      this.listaCompra = this.listas.find(element => element.id == idLista);
      this.listaCompra.borrada = 1;
      this.listaCompraSvc.actualizarProductosLista( this.listaCompra ).subscribe(
        resp =>
          {
            this.showToast( 'Lista eliminada' );
            this.ngOnInit( this.segment.value );
            this.loading.dismiss();
          },
        error => {
          this.showToast( 'Error al eliminar la lista de la compra' );
          this.loading.dismiss();
        }
      )
    }

    onPressUp( idLista ){
      var elementoActualizar = document.getElementById( 'col_item_' + idLista );
      var normalDiv = document.getElementById('normalDiv');
      var deleteDiv = document.getElementById('deleteList');
      var finalizarDiv = document.getElementById('finalizarDiv');
      var newClass = '';
      if (normalDiv != null) {
        normalDiv.style.display = false?'block':'none';
      }
      if( this.segment.value === '0' ){ // Pendientes
        newClass = 'col-finish';
        this.finalizar = true;
        this.eliminar = false;
        this.idListaEliminar = idLista;
        finalizarDiv.style.display = true?'block':'none';
      }
      else{ // Historicp
        newClass = 'col-delete';
        this.eliminar = true;
        this.finalizar = false;
        this.idListaEliminar = idLista;
        deleteDiv.style.display = true?'block':'none';
      }
      elementoActualizar.classList.add(newClass);

    }

    pantallaNormal( ){
      var elementoBorrar = document.getElementById( 'col_item_' + this.idListaEliminar );
      elementoBorrar.classList.remove('col-delete');
      elementoBorrar.classList.remove('col-finish');
      this.idListaEliminar = 0;
      this.eliminar = false;
      this.finalizar = false;
      var normalDiv = document.getElementById('normalDiv');
      var deleteDiv = document.getElementById('deleteList');
      if (normalDiv != null) {
        normalDiv.style.display = 'block';
      }
      if (deleteDiv != null) {
        deleteDiv.style.display = 'none';
      }
    }


}
