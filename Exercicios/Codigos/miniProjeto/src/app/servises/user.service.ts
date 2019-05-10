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
    return this.httpCliente.post(this.url,user); //retorna um observavel
  }

  list(){
    return this.httpCliente.get(this.url); //retorna um observavel
  }

  delete(id:number){
    return this.httpCliente.delete(this.url+`/${id}`);
  }

  update(user:User){
    // return this.httpCliente.put(`${this.url}/`);
  }
}
