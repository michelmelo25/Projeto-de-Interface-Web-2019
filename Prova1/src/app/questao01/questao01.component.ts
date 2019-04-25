import { Component } from '@angular/core';

@Component({
  selector: 'app-questao01',
  templateUrl: './questao01.component.html',
  styleUrls: ['./questao01.component.css']
})
export class Questao01Component{

  mensagem = "";
  cor = "";
  alerta = "secondary";

  ehPrimo(valor:number):boolean {
    for(let i = 2; i < valor; i++){
      if((valor % i) == 0) {
        return false;
      }
    }
    return true;
  }

  verificar(valor: number){
      if(this.ehPrimo(valor)){
        this.mensagem = "É PRIMO";
        this.cor = 'green';
        this.alerta = 'success';
      }else{
        this.mensagem = "NÃO É PRIMO";
        this.cor = 'red';
        this.alerta = 'danger';
      }
  }
}
