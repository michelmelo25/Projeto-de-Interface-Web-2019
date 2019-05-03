import { Aluno } from 'src/app/model/IAluno';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  alunos:Aluno[] = [];
  url:string = 'http://localhost:3000/alunos';

  constructor(private http:HttpClient) { }

  adicionar(nome:string){
    return this.http.post(this.url,{"nome":nome});
  }

  atualizar(aluno:Aluno){
  }

  listar(){
    return this.http.get(this.url); //observavel
  }

  excluir(id:number){
    return this.http.delete(this.url+`/${id}`);
  }

  consultar(id:number){
    return null;
  }
}
