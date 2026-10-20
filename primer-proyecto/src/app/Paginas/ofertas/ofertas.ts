import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Gpu } from '../../../models/interfaz2';
import { CarritoServicio } from '../../../servicios/carritoservicio';

@Component({
  selector: 'app-ofertas',
  imports: [CurrencyPipe],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {

  constructor(private carritoServicio: CarritoServicio) {}

  gpus: Gpu[] = [
    {
      id: 1,
      name: 'RTX 4060',
      image: '/rtx4060.webp',
      oldPrice: 780000,
      price: 649999,
      discount: 20,
      features: [
        '8GB GDDR6',
        'DLSS 3',
        'Ray Tracing'
      ],
      cantidad: 0
    },
    {
      id: 2,
      name: 'RX 7700 XT',
      image: '/7700xt.webp',
      oldPrice: 920000,
      price: 799999,
      discount: 15,
      features: [
        '12GB GDDR6',
        'Gaming 1440p',
        'FreeSync'
      ],
      cantidad: 0
    },
    {
      id: 3,
      name: 'RTX 4070 SUPER',
      image: '/rtx4070.jpg',
      oldPrice: 1250000,
      price: 1099999,
      discount: 12,
      features: [
        '12GB GDDR6X',
        'DLSS 3',
        'Ultra 1440p'
      ],
      cantidad: 0
    }
  ];

  agregarAlCarrito(gpu: Gpu): void {
    this.carritoServicio.agregarProducto({
      id: gpu.id,
      nombre: gpu.name,
      precio: gpu.price,
      imagen: gpu.image,
      cantidad: 1,
      descripcion: '',
      stock: 0,
      categoria: '',
      disponibilidad: false
    });
  }
}