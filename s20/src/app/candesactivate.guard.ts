import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

interface Desactivar {
  SalirDeRuta: () => Observable<boolean> | boolean;
  }
@Injectable({
  providedIn: 'root'
})
// Crear una Interfaz para CanDeactivate

export class CandesactivateGuard implements CanDeactivate<unknown> {
  // canDeactivate(
  //   component: unknown,
  //   currentRoute: ActivatedRouteSnapshot,
  //   currentState: RouterStateSnapshot,
  //   nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  canDeactivate(component: Desactivar) {
    return component.SalirDeRuta ? component.SalirDeRuta(): true;
    }

}
