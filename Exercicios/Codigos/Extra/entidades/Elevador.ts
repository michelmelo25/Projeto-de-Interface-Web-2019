export class Elevador{

    private andarAtual: number;
    private totalAndares: number;
    private capacidade: number;
    private qtdPessElevador: number;

    constructor(capacidade:number, qtdAndares: number){
        this.andarAtual = 0;
        this.capacidade = capacidade;
        this.qtdPessElevador = 0;
        this.totalAndares = qtdAndares;
    }


    public Entrar(): void{
        if(this.qtdPessElevador < this.capacidade){
            this.qtdPessElevador++;
        }else{
            console.log("Elevador cheio");
        }
    }

    public Sair(): void{
        if(this.qtdPessElevador > 0){
            this.qtdPessElevador--;
        }else{
            console.log("Elevador vasio");
        }
    }

    public Subir(): void{
        if(this.andarAtual < this.totalAndares){
            this.andarAtual++;
        }
    }

    public Descer(): void{
        if(this.andarAtual > 0){
            this.andarAtual --;
        }
    }

    public getAndarAtual(): number{
        return this.andarAtual;
    }

    public getTotalAndares(): number{
        return this.totalAndares;
    }

    public getCapacidade(): number{
        return this.capacidade;
    }

    public getQtdPessElevador(): number{
        return this.qtdPessElevador;
    }

    public setAndarAtual(andarAtual: number){
        this.andarAtual = andarAtual;
    }

    public setTotalAndares(totalAndares: number){
        this.totalAndares = totalAndares;
    }

    public setCapacidade(capacidade: number){
        this.capacidade = capacidade;
    }

    public setQtdPessElevador(qtdPessElevador: number){
        this.qtdPessElevador = qtdPessElevador;
    }
}