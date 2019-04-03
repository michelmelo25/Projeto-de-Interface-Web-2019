export class Pessoa{
    private nome: String;
    private nascimento: Date;
    private altura: number;

    constructor(nome: String, nascimento: Date, altura: number){
        this.nome = nome;
        this.nascimento = nascimento;
        this.altura = altura;
    }

    public getNome(): String{
        return this.nome;
    }
    public getNascimento(): Date{
        return this.nascimento;
    }
    public getAltura(): number{
        return this.altura;
    }

    public setNome(nome: String): void{
        this.nome = nome;
    }
    public setNascimento(nascimento: Date): void{
        this.nascimento = nascimento;
    }
    public setAltura(altura: number): void{
        this.altura = altura;
    }

    public idadde(){
        let today:Date = new Date();
        var one_day=1000*60*60*24;
        var date1_ms = this.nascimento.getTime();
        var date2_ms = today.getTime();
        var difference_ms = date2_ms - date1_ms;
        console.log("Idade: " + Math.round(difference_ms/one_day)/365);
    }

    public info(){
        console.log("Nome: " + this.nome);
        console.log(this.nascimento);
        console.log("Altura: " + this.altura);
    }

}