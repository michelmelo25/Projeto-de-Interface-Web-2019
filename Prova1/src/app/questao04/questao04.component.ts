import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questao04',
  templateUrl: './questao04.component.html',
  styleUrls: ['./questao04.component.css']
})
export class Questao04Component {

  @Output('salvar') pessoaSalva = new EventEmitter();

  resultadoIMC(imc: number): String{
    if(imc <= 19){
      return "Baixo Peso";
    }else if(imc > 19 && imc <= 25){
      return "Peso Normal";
    }else{
      return "Sobre Peso";
    }
  }

  imc(peso: number, altura:number){
    let imc = peso / (altura * altura);
    let resultado = this.resultadoIMC(imc);
    this.pessoaSalva.emit({'imc': imc, 'resultado': resultado});
  }

}
