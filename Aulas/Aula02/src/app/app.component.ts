import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nome = "Michel de Melo Vieira";

  salvar(nomeInput:string){
    this.nome = nomeInput;
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