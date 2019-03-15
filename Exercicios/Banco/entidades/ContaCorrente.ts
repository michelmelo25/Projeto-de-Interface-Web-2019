import {Conta} from './Conta'

export class ContaCorrente extends Conta{

    constructor(){
        super(1);
    }

    sacar(valor: number){
        if(valor > 0){
            if(this.saldo >= valor + 2){
                this.saldo -= (valor + 2);
            }
        }
    }

    correcaoMonetaria(){}

    geraRelatorio(){
        console.log("Conta: " + this.numero);
        console.log("Tipo: " + "Conta Corente");
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento Atual: RS$00,00");
    }
}