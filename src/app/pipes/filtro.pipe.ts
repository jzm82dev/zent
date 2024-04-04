import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( vector: any[], texto: any, columna: string ): any[] {
    if ( texto === '' ) {
      return vector;
    }

    texto = texto.toString().toLowerCase();

    return vector.filter( item => {
      return item[columna].toLowerCase().includes( texto );
    } );

  }

}
