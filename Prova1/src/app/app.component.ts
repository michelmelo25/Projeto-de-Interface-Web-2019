import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pessoas = [];

  salvarPessoa(pessoa: any){
    this.pessoas.push(pessoa);
  }

  getClass(pessoa: any){
    if(pessoa.resultado == "Peso Normal"){
      return "list-group-item list-group-item-success";
    }else if(pessoa.imc > 30 || pessoa.imc < 14){
      return "list-group-item list-group-item-danger";
    }else{
      return "list-group-item list-group-item-warning";
    }
  }
}
