

export class Grupo {

    constructor(
      public id: number,
      public nombre: string,
      public descripcion: string,
      public fecha_alta,
      public fecha_baja,
      public id_user_creador: number,
      public participantes: any[],
      public id_tipo: number,
      public listaCompra: number
    ) {}
}
