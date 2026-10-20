import { Routes } from '@angular/router';
import { Inicio } from './Paginas/inicio/inicio';
import { Productos } from './Paginas/productos/productos';
import { Ofertas } from './Paginas/ofertas/ofertas';
import { Contacto } from './Paginas/contacto/contacto';
import { InicioSesion } from './Auth/inicio-sesion/inicioSesion';
import { Requisitos } from './Auth/requisitos/requisitos';
import { Carrito } from './Compartidos/carrito/carrito';
import { Fav } from './Compartidos/fav/fav';
import { Favoritos } from './Paginas/favoritos/favoritos';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'productos', component: Productos },
  { path: 'ofertas', component: Ofertas },
  { path: 'contacto', component: Contacto },
  { path: 'inicioSesion', component: InicioSesion },
  { path: 'requisitos', component: Requisitos },
  { path: 'carrito', component: Carrito },
  { path: 'favoritos', component: Favoritos }
];
