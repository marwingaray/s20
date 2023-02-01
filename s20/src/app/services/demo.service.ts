import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  
  constructor(private http: HttpClient) { }
  
  endPointUser = environment.urlApi

  getUserAll() :Observable<Users[]>{

    return this.http.get<Users[]>(this.endPointUser);
  }
}
