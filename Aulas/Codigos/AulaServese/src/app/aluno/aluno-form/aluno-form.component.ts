import { Component } from '@angular/core';
import { Aluno } from 'src/app/model/IAluno';
import { AlunoService } from './../../servise/aluno.service';


@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent {

  alunos:Aluno[] = [];
  aluno:Aluno;
  pesq = true;

  constructor(private alunoServise: AlunoService){ this.listar(); }

  adicionar(nome:string){
    this.alunoServise.adicionar(nome).subscribe(
      (res:Aluno) => { console.log(`adicionou ${res.nome} com id ${res.id}`); this.listar(); }
    );
  }

  atualizar(aluno:Aluno){
    this.alunoServise.atualizar(aluno).subscribe(
      (res:Aluno) => { console.log(`atualizado ${res.nome} com id ${res.id}`); this.listar}
    );
  }

  listar(){
    this.alunoServise.listar().subscribe(
      (res:Aluno[]) => {this.alunos = res}
    );
  }

  excluir(id:number){
    this.alunoServise.excluir(id).subscribe(
      (res:any) => {this.listar()}
    );
  }

  consultar(id:number){
    this.alunoServise.consultar(id).subscribe(
      (res:Aluno) => { this.aluno = res; this.pesq = false}
    );
  }
}