import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nome = "Michel de Melo Vieira";
  clicou = false;
  pessoas = [];
  contador = 0;

  salvar(nomeInput:string){
    this.nome = nomeInput;
    this.clicou = true;
    this.pessoas.push(
      {
        nome: this.nome, 
        id:this.contador
      }
    );
    this.contador++;
  }

  mudar(event:any){
    this.nome = event.target.value;
  }
  
  mostraData(data:Object){
    console.log("Ano: " + data['year']);
    console.log("Mes: " + data['month']);
    console.log("Dia: " + data['day'])
  }
}