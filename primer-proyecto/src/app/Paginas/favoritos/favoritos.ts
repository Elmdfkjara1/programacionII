import { Component, OnInit } from '@angular/core';
import { FavoritosServicio } from '../../../servicios/favoritosServicio';
import { Producto } from '../../../models/interfaz';
import { CurrencyPipe } from '@angular/common'
@Component({
  selector: 'app-favoritos',
  imports: [CurrencyPipe],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css'
})

export class Favoritos implements OnInit {

  favoritos: Producto[] = [];

  constructor(
    private favoritosServicio: FavoritosServicio
  ) {}

  ngOnInit() {

    this.favoritos =
      this.favoritosServicio.obtenerFavoritos();

  }

  eliminar(id: number) {

    this.favoritosServicio.eliminarFavorito(id);

    this.favoritos =
      this.favoritosServicio.obtenerFavoritos();

  }

}