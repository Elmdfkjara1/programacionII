import { Injectable } from '@angular/core';
import { Producto } from '../models/interfaz';

/**
 * Servicio de favoritos
 * Permite guardar productos marcados como favoritos
 */
@Injectable({
  providedIn: 'root'
})
export class FavoritosServicio {

  /**
   * Lista de productos favoritos
   */
  favoritos: Producto[] = [];

  /**
   * CREATE
   * Agrega un producto a favoritos si no existe ya
   */
  agregarFavorito(p: Producto) {

    // Busca si el producto ya está en favoritos por ID
    const existe = this.favoritos.find(
      producto => producto.id === p.id
    );

    // Si NO existe, lo agrega
    if (!existe) {
      this.favoritos.push(p);
    }
  }

  /**
   * READ
   * Devuelve la lista de favoritos
   */
  obtenerFavoritos() {
    return this.favoritos;
  }

  /**
   * DELETE
   * Elimina un producto de favoritos por su ID
   */
  eliminarFavorito(id: number) {

    this.favoritos =
      this.favoritos.filter(
        p => p.id !== id
      );
  }
}