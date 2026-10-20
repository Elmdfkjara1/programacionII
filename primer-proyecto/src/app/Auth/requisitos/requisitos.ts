import { Component } from '@angular/core';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.html',
  styleUrl: './requisitos.css',
})
export class Requisitos {

  registrar(email: any, password: any, confirm: any) {

    if (password.value !== confirm.value) {
      alert('Las contraseñas no coinciden ❌');
      return;
    }

    alert('Registro exitoso ✅ Bienvenido a SapeShop');

    email.value = '';
    password.value = '';
    confirm.value = '';
  }

}