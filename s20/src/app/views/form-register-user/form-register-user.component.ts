import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-register-user',
  templateUrl: './form-register-user.component.html',
  styleUrls: ['./form-register-user.component.css']
})
export class FormRegisterUserComponent {
  constructor(private userService: UsersService) { }
  // Crear objeto que se evniara a al api
  datos: Users = { id: '', name: '', username: '' };

  onSubmit() {
    this.userService.postUser(this.datos).subscribe(
      (usuario: Users) => console.log(usuario)
    );
  }
}
