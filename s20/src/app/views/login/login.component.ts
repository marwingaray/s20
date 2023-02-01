import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authentication: AuthenticationService, private router: Router){
    
  }

  urlDirection = ""
  login(){
    this.authentication.login();
    this.urlDirection = this.authentication.urlUsuarioIntentaAcceder;
    this.authentication.urlUsuarioIntentaAcceder = "";
    this.router.navigate([this.urlDirection]);
  }
}
