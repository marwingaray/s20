import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-by-id',
  templateUrl: './users-by-id.component.html',
  styleUrls: ['./users-by-id.component.css']
})
export class UsersByIdComponent {
  constructor(private userService: UsersService) { }

  resultado = true;
  vista = false;
  user!: Users | null;

  // Ejecutar el metodo getUsersAll del servicio al cargar el componente
  getUserID(id: string) {
    this.resultado = true;
    this.user = null;
    this.userService.getUserId(id).subscribe({
      next: (usuario: Users) => { this.user = usuario; this.vista = false; }
      ,
      error: (e) => { console.error(e); this.resultado = false; },
      complete: () => console.info("La API devolvio un registro")
    });
  }

  ngOnInit() {
    this.resultado = true;
    this.vista = true;
  }
}
