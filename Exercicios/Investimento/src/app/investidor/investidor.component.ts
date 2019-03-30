import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investidor',
  templateUrl: './investidor.component.html',
  styleUrls: ['./investidor.component.css']
})
export class InvestidorComponent implements OnInit {

  alerta = "primary";
  escondido = true;
  resultado = "";
  negativo = false;

  constructor() { }

  ngOnInit() {
  }

  iBettMyMoney(dia:number,mes:number,ano:number,investimento:number): number {
    let total = 0;
    this.resultado = "O RESULTADO DO MEU INVESTIMENTO FOI: R$";
    if(investimento < 0 || investimento > 2000){
      investimento = 1520;
    }

    if(this.ehPrimo(dia)){
      total += investimento * -1;
    }else{
      total += investimento * 2;
    }

    if(this.ehPar(mes)){
      total *= (mes * 10);
    }else{
      total *= (mes * 100);
    }

    total *= ((investimento * ano) * 22);
    (total < 0) ? (this.alerta = "danger" , this.negativo = true) : (this.alerta = "primary" , this.negativo = false) ;
    // if(total < 0){
    //   this.alerta = "danger";
    //   this.negativo = true;
    // }else{
    //   this.alerta = "primary";
    //   this.negativo = false;
    // }
    this.escondido = false;
    this.resultado += total;
    return total; 
  }

  ehPrimo(x:number):boolean{

    for (let index:number = 2; index < x; index++) {
        if((x%index) == 0.0) return false;
    }
    return true;

}

ehPar(x:number):boolean{
    if(x%2==0) return true;
    return false;
}
}
