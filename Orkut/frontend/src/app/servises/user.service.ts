import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Post } from '../models/post';

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

  get(id:number){
    return this.httpCliente.get(`${this.url}/${id}`);
  }

  update(user:User){
    return this.httpCliente.put(`${this.url}/${user.id}`,user);
  }

  login(email:string){
    return this.httpCliente.get(`${this.url}/?email=${email}`);
  }

  registerPost(post:Post, id:number){
    let user:User; 
    this.get(id).subscribe(
      (res:User) => {user = res}
    )
    user.posts.concat(post);
    return this.update(user);
  }
}
