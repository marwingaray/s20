import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';
import { FormRegisterUserComponent } from './views/form-register-user/form-register-user.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MesaggeComponent } from './views/mesagge/mesagge.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { UsersByIdComponent } from './views/users-by-id/users-by-id.component';

const routes: Routes = [
  {path:'', component: HomeComponent, title:'Inicio'},
  {path:'lista-usuarios', component: UserListComponent, title:'lista de usuarios'},
  {path:'login', component: LoginComponent, title:'Iniciar sesion'},

  // route with canActivate (is necessary login)
  {path:'buscar-usuario', component: UsersByIdComponent, canActivate: [CanactivateGuard], title:'Buscar usuario'},
  {path:'nuevo-registro', component: FormRegisterUserComponent,canActivate: [CanactivateGuard], title:'Registrar usuario'},


  {path: 'mensaje', component: MesaggeComponent, canDeactivate: [CandesactivateGuard]},
  {path:'**', component: NotFoundComponent, title:'Pagina no encontrada'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
