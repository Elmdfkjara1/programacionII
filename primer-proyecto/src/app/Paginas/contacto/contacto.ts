import { Component } from '@angular/core';

/**
 * COMPONENTE: Contacto
 * Muestra la sección de contacto y el formulario de consultas
 */
@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  /**
   * Método que se ejecuta cuando se envía el formulario
   */
  enviarConsulta(event: Event) {

    // Evita que la página se recargue al enviar el formulario
    event.preventDefault();

    // Muestra un mensaje de confirmación al usuario
    alert('Tu consulta fue enviada correctamente. ¡Gracias!');

    // Limpia todos los campos del formulario
    (event.target as HTMLFormElement).reset();
  }
}