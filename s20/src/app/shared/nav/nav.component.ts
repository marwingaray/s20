import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public authentication: AuthenticationService) { }

  userLogin = false;

  ngOnInit() {
    this.userLogin = this.authentication.isLoggedIn('');
    this.authentication.changeLoginStatus$.subscribe(
      (estado: boolean) => this.userLogin = estado
    );
  }

  logout(){
    this.authentication.logout();
    }
}
