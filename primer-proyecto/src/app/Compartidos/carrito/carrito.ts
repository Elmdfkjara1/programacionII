import { Component, OnInit } from '@angular/core';
import { CarritoServicio } from '../../../servicios/carritoservicio';
import { Producto } from '../../../models/interfaz';
import { DecimalPipe } from '@angular/common';

/**
 * COMPONENTE: Carrito
 * Muestra los productos agregados al carrito
 */
@Component({
  selector: 'app-carrito',
  imports: [DecimalPipe],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {

  /**
   * Lista de productos que se muestran en pantalla
   */
  productos: Producto[] = [];

  /**
   * Inyección del servicio del carrito
   */
  constructor(
    private carritoServicio: CarritoServicio
  ) {}

  /**
   * Se ejecuta cuando el componente inicia
   * Carga los productos del carrito
   */
  // ngOnInit se ejecuta cuando el componente se carga
// Sirve para cargar datos al iniciar (ej: productos del carrito)
// Se ejecuta una sola vez
  ngOnInit() {
    this.productos =
      this.carritoServicio.obtenerProductos();
  }

  /**
   * Aumenta la cantidad de un producto
   */
  aumentar(id: number) {
    this.carritoServicio.aumentarCantidad(id);
  }

  /**
   * Disminuye la cantidad de un producto
   */
  disminuir(id: number) {
    this.carritoServicio.disminuirCantidad(id);
  }

  /**
   * Elimina un producto del carrito
   * y actualiza la vista
   */
  eliminar(id: number) {
    this.carritoServicio.eliminarProducto(id);

    // refresca la lista
    this.productos =
      this.carritoServicio.obtenerProductos();
  }

  /**
   * Finaliza la compra
   * limpia el carrito y muestra mensaje
   */
  realizarCompra() {
    alert('Compra realizada con éxito. ¡Gracias por tu compra!');

    this.carritoServicio.limpiarCarrito();

    // refresca la vista
    this.productos =
      this.carritoServicio.obtenerProductos();
  }
}