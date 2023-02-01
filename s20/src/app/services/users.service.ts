import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  apiUser = environment.urlApi + 'users/';

  apiUserAlbums = environment.urlApi + 'albums/';

  getUsersAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUser);
  }

  getUserId(userId: string): Observable<Users> {
    const url = this.apiUser + userId;
    return this.http.get<Users>(url);
  }

  postUser(usuario: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUser, usuario);
  }

  // Metodo GET para el Interceptor
  getUsersAllInterceptor(): Observable<any> {
    return this.http.get(this.apiUserAlbums, { observe: 'response' });
  }
}
