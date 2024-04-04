export class Purchase {

    constructor(
        //public id: number,
        public title: string,
        public description: string,
        public user_id: number,
        public count: number,
        public date,
        public pagado: number,
        public id_grupo: number,
        public participantes: any[],
        public img,
        public telefono_id: string
    ) {}
}
