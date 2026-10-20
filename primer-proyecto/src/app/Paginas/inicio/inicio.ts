import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'Inicio',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio { // 

  // Categorías enfocadas en GPUs
  categorias = [
    { id: 'all', nombre: 'Todas' },
    { id: 'nvidia', nombre: 'NVIDIA GeForce' },
    { id: 'amd', nombre: 'AMD Radeon' },
    { id: 'workstation', nombre: 'Workstation' }
  ];

  // Listado de placas
  placas = [
    {
      modelo: 'ASUS TUF Gaming RTX 4070 Ti Super',
      precio: 950000,
      vram: '16GB GDDR6X',
      imagen: '/4070-ti-super.webp',
      marca: 'nvidia'
    },
    
    {
      modelo: 'Sapphire Pulse Radeon RX 7800 XT',
      precio: 680000,
      vram: '16GB GDDR6',
      imagen: '/Rx-7800-Xt-16gb-gddr6.webp',
      marca: 'amd'
    },
    {
      modelo: 'MSI Ventus 3X RTX 4060 Ti',
      precio: 420000,
      vram: '8GB GDDR6',
      imagen: '/Rtx-4060-16gb-gddr6.jpg',
      marca: 'nvidia'
    },
    {
      modelo: 'PNY NVIDIA RTX A4000',
      precio: 1100000,
      vram: '16GB GDDR6',
      imagen: '/Rtx-A4000-16GB-.png',
      marca: 'workstation'
    }
  ];

  constructor() { }
}