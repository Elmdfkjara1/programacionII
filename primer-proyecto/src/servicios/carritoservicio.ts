import { Injectable } from '@angular/core';
import { Producto } from '../models/interfaz';

/**
 * Este servicio maneja el carrito de compras.
 * Está disponible en toda la aplicación gracias a providedIn: 'root'
 */
@Injectable({
  providedIn: 'root'
})
export class CarritoServicio {

  /**
   * Lista de productos dentro del carrito
   */
  productos: Producto[] = [];

  /**
   * CREATE
   * Agrega un producto al carrito.
   * Si el producto ya existe, solo aumenta la cantidad.
   */
  agregarProducto(p: Producto) {

    // Busca si el producto ya está en el carrito por su ID
    const productoExistente =
      this.productos.find(
        producto => producto.id === p.id
      );

    if (productoExistente) {

      // Si ya existe, aumenta la cantidad
      productoExistente.cantidad++;

    } else {

      // Si no existe, lo agrega con cantidad inicial 1
      this.productos.push({
        ...p,
        cantidad: 1
      });

    }
  }

  /**
   * READ
   * Devuelve todos los productos del carrito
   */
  obtenerProductos() {
    return this.productos;
  }

  /**
   * UPDATE
   * Aumenta la cantidad de un producto específico
   */
  aumentarCantidad(id: number) {

    const producto =
      this.productos.find(p => p.id === id);

    if (producto) {
      producto.cantidad++;
    }
  }

  /**
   * UPDATE
   * Disminuye la cantidad de un producto
   * pero nunca baja de 1
   */
  disminuirCantidad(id: number) {

    const producto =
      this.productos.find(p => p.id === id);

    if (producto && producto.cantidad > 1) {
      producto.cantidad--;
    }
  }

  /**
   * DELETE
   * Elimina un producto del carrito completamente
   */
  eliminarProducto(id: number) {

    this.productos =
      this.productos
        .filter(p => p.id !== id);
  }

  /**
   * Vacía todo el carrito (como "finalizar compra")
   */
  limpiarCarrito() {
    this.productos = [];
  }
}

/* 
   CÓDIGO ANTIGUO (comentado como referencia)
    */

/*

agregarProducto(p: Producto){
  this.productos.push(p);
}

obtenerProductos(){
  return this.productos;
}

aumentarCantidad(id: number){

  const producto =
  this.productos.find(p => p.id === id);

  if(producto){
    producto.cantidad++;
  } 
}

DisminuirCantidad(id: number){

  const producto =
  this.productos.find(p => p.id === id);

  if(producto && producto.cantidad > 1){
    producto.cantidad--;
  } 
}

eliminarProducto(id: number){ 
  this.productos =
  this.productos.filter(p => p.id !== id);
}

*/