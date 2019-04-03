import  {ContaCorrente} from '../entidades/ContaCorrente' 
import {ContaInvestimento} from '../entidades/ContaInvestimento'
import {ContaPoupanca} from '../entidades/ContaPoupanca'

let contaCorrente = new ContaCorrente();
let contaPoupanca = new ContaPoupanca();
let contaInvestimento = new ContaInvestimento();

contaCorrente.depositar(300);
contaPoupanca.depositar(450);
contaInvestimento.depositar(500);

contaCorrente.geraRelatorio();
console.log(" ");
contaPoupanca.geraRelatorio();
console.log(" ");
contaInvestimento.geraRelatorio();
console.log(" ");

contaCorrente.sacar(50);
console.log(" ");
contaPoupanca.sacar(100);
console.log(" ");
contaInvestimento.sacar(130);
console.log(" ");

contaCorrente.correcaoMonetaria();
contaPoupanca.correcaoMonetaria();
contaInvestimento.correcaoMonetaria();

contaCorrente.geraRelatorio();
console.log(" ");
contaPoupanca.geraRelatorio();
console.log(" ");
contaInvestimento.geraRelatorio();
console.log(" ");
