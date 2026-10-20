import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../../models/interfaz';
import { CarritoServicio } from '../../../servicios/carritoservicio';
import { FavoritosServicio } from '../../../servicios/favoritosServicio';
@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
constructor(
private carritoServicio: CarritoServicio,
private favoritosServicio: FavoritosServicio
){}
//no mames cabron que estoy haciendo con mi vida que hago programando no mames xdxdxdxd
PRODUCTOS: Producto[] = [
  {
    id: 1,
    nombre: 'NVIDIA GeForce RTX 4090',
    descripcion: 'Placa de video de gama alta ideal para gaming 4K y renderizado avanzado.',
    precio: 2500000,
    stock: 5,
    imagen: '/RTX4090.png',
    categoria: 'GPU',
    disponibilidad: true,
    cantidad: 1 // cantidad inicial para el carrito
  },
  {
    id: 2,
    nombre: 'NVIDIA GeForce RTX 4080',
    descripcion: 'Excelente rendimiento en juegos AAA y aplicaciones de diseño.',
    precio: 1800000,
    stock: 8,
    imagen: '/rtx4080.jpg',
    categoria: 'GPU',
    disponibilidad: true,
  cantidad: 1 
  },
  {
    id: 3,
    nombre: 'NVIDIA GeForce RTX 4070',
    descripcion: 'Balance perfecto entre precio y rendimiento para gaming en 1440p.',
    precio: 1200000,
    stock: 10,
    imagen: '/rtx4070.jpg',
    categoria: 'GPU',
    disponibilidad: true,
    cantidad: 1 
  },
  {
    id: 4,
    nombre: 'AMD Radeon RX 7900 XTX',
    descripcion: 'Potente GPU de AMD para gaming extremo y multitarea.',
    precio: 1700000,
    stock: 6,
    imagen: '/rx7900xtx.png',
    categoria: 'GPU',
    disponibilidad: true,
    cantidad: 1 
  },
  {
    id: 5,
    nombre: 'AMD Radeon RX 7800 XT',
    descripcion: 'Gran opción para gaming en alta calidad con buen consumo energético.',
    precio: 950000,
    stock: 12,
    imagen: '/Rx-7800-Xt-16gb-gddr6.webp',
    categoria: 'GPU',
    disponibilidad: true,
    cantidad: 1 
  },
  {
    id: 6,
    nombre: 'NVIDIA GeForce RTX 3060',
    descripcion: 'Placa accesible para gaming en 1080p con buen rendimiento.',
    precio: 650000,
    stock: 15,
    imagen: '/rtx3060.webp',
    categoria: 'GPU',
    disponibilidad: true,
    cantidad: 1 
  }
]
// Llama al servicio para agregar
  agregarAlCarrito(producto: Producto){
    this.carritoServicio.agregarProducto(producto);
  }

  agregarAFavoritos(producto: Producto){
    this.favoritosServicio.agregarFavorito(producto);
  }

}