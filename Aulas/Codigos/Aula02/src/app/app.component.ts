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

  //Metodos para o componente datepicker
  // mudar(event:any){
  //   this.nome = event.target.value;
  // }
  
  // mostraData(data:Object){
  //   console.log("Ano: " + data['year']);
  //   console.log("Mes: " + data['month']);
  //   console.log("Dia: " + data['day'])
  // }
}