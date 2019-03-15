export abstract class Conta{
    protected numero: number;
    protected saldo: number;

    constructor(tipo: number){
        if(tipo == 1){
            this.numero = Math.floor(Math.random() * 3999) + 1;
        }else if(tipo == 2){
            this.numero = Math.floor(Math.random() * 6999) + 4000;
        }else if(tipo == 3){
            this.numero = Math.floor(Math.random() * 9999) + 6999;
        }
        
        this.saldo = 0;
    }

    depositar(valor: number){
        if(valor > 0){
            this.saldo += valor;
        }
    }

    abstract sacar(valor: number)

    abstract correcaoMonetaria()
}