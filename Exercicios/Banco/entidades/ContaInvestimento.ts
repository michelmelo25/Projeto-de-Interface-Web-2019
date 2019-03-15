import {Conta} from './Conta'

export class ContaInvestimento extends Conta{
    selic: number;

    constructor(){
        super(3);
        this.selic = 0.526;
    }

    sacar(valor: number){
        if(valor > 0){
            let imposto: number;
            imposto = valor * 0.05 + 10
            if(this.saldo >= valor + imposto){
                this.saldo -= (valor + imposto);
            }
        }
    }

    correcaoMonetaria(){
        this.saldo += this.saldo * this.selic;
    }

    geraRelatorio(){
        console.log("Conta: " + this.numero);
        console.log("Tipo: " + "Conta Investimneto");
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento Atual: RS$" + this.saldo * this.selic);
    }
}