import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormRegisterUserComponent } from './form-register-user/form-register-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersByIdComponent } from './users-by-id/users-by-id.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MesaggeComponent } from './mesagge/mesagge.component';



@NgModule({
  declarations: [
    FormRegisterUserComponent,
    UserListComponent,
    UsersByIdComponent,
    LoginComponent,
    MesaggeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    
  ]
})
export class ViewsModule { }
