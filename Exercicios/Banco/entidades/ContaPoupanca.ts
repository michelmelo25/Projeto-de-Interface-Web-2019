import {Conta} from './Conta'

export class ContaPoupanca extends Conta{

    constructor(){
        super(2);
    }

    sacar(valor: number){
        if(valor > 0){
            let imposto: number;
            imposto = valor * 0.02;
            if(this.saldo >= valor + imposto){
                this.saldo -= (valor + imposto);
            }
        }
    }

    correcaoMonetaria(){
        this.saldo += this.saldo * 0.02;
    }

    geraRelatorio(){
        console.log("Conta: " + this.numero);
        console.log("Tipo: " + "Conta Pupanca");
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento Atual: RS$" + this.saldo * 0.02);
    }
}