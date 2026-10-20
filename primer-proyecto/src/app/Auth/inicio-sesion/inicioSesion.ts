import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicioSesion.html',
  styleUrl: './inicioSesion.css',
})
export class InicioSesion {

  iniciarSesion(email: any, password: any) {

    alert('Has iniciado sesión correctamente ✅');

    email.value = '';
    password.value = '';

  }

}