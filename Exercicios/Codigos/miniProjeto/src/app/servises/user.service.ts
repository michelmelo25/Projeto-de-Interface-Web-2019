import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'http://localhost:3000/users';

  constructor(private httpCliente:HttpClient) { }

  register(user:User){
    return this.httpCliente.post(this.url,user);
  }
}
