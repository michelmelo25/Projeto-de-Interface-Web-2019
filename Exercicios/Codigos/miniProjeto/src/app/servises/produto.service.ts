import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
 
  url:string = 'http://localhost:3000/products';

  constructor(private httpClient:HttpClient) { }

  register(produto:Produto){
    return this.httpClient.post(this.url,produto); // retorna um observavel
  }

  list(){
    return this.httpClient.get(this.url);
  }

  delete(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  retrieveById(id:number){
    return this.httpClient.get(`${this.url}/${id}`);
  }

  update(produto:Produto){
    return this.httpClient.put(`${this.url}/${produto.id}`,produto);
  }
}
