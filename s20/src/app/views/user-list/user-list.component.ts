import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  constructor(private usersService: UsersService) { }
  listado = new Array();
  response:any;
  // ngOnInit() {
  //   this.usersService.getUsersAll().subscribe({
  //     next: (response: Users[]) => {
  //       console.log(response);
  //       this.listado = response;
  //     },
  //     error: (er) => console.error(er),
  //     complete: () => console.info("request success")
  //   });
  // }

  // Ejecutar el metogo getUsersAllInterceptor
  listaConInterceptor() {
    this.usersService.getUsersAllInterceptor().subscribe({
      next: (response: any) => { 
        this.listado = response.body;
        this.response = response;
        console.log(response) 
      },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });
  }


}
