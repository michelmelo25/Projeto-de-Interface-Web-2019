import { Component } from '@angular/core';

@Component({
  selector: 'app-questao02',
  templateUrl: './questao02.component.html',
  styleUrls: ['./questao02.component.css']
})
export class Questao02Component {

  mensagem = "";
  cor = "";
  alerta = "";
  visivel = true;

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
        this.visivel = false;
      }else{
        this.mensagem = "NÃO É PRIMO";
        this.cor = 'red';
        this.alerta = 'danger';
        this.visivel = false;
      }
  }

}
