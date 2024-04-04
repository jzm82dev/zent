

export interface Usuario {
    id: number;
    name: string;
    apellido: string;
    total_pagado: number;
    password: string;
    email: string;
    telephone: string;
}


export interface Compra {
    name: string;
    id: number;
    title: string;
    count: number;
    description: string;
    user_id: number;
    foto: string;
    date: Date;
    pagado: string;
    fecha_pagado: Date;
    imagen;
    telefono_id;
    nombre_agenda: string;
}



export interface CompraNueva {
    title: string;
    count: string;
    description: string;
    user_id: string;
    date: string;
}

export interface Categoria {
  id: number;
  nombre: string;
}

export interface Producto {
  id: number;
  nombre: string;
  id_categoria: number;
  selected: false;
}

export interface ListaCompra {
  id: number;
  titulo: string;
  productos: number[];
}

export interface ContactoAgenda {
  id: number;
  nombre: string;
}
