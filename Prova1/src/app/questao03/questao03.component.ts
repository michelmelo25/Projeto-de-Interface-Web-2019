import { Component } from '@angular/core';

@Component({
  selector: 'app-questao03',
  templateUrl: './questao03.component.html',
  styleUrls: ['./questao03.component.css']
})
export class Questao03Component {

  pessoas = [];

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
    this.pessoas.push({'imc': imc, 'resultado': resultado});
  }

}
