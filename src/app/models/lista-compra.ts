export class ListaCompra {

    constructor(
        public id: number,
        public titulo: string,
        public finalizada: number,
        public productos: number[],
        public productosManuales: string[],
        public fecha_alta,
        public borrada: number,
        public fecha_fin,
        public idGrupo: number
    ) {}
}
