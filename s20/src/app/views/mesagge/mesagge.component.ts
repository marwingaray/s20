import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mesagge',
  templateUrl: './mesagge.component.html',
  styleUrls: ['./mesagge.component.css']
})
export class MesaggeComponent {
  mensaje="";
  enviado= false;
  
  EnviarMensaje(){
  alert('Mensaje: ' + this.mensaje);
  this.enviado = true;
  }
  
  SalirDeRuta(): Observable<boolean> | boolean{
  // Crietrio para evitar que el usuario abandone el cpomponente
  
  // Si mensaje no esta vacio o enviado es true
  if(!this.mensaje || this.enviado ){
  return true;
  }
  
  const confirmar = confirm("¿Desea abandonar el formulario? \n Perdera todos los datos!!");
  return confirmar;
  }
}
