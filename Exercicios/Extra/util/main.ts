import { ControleRemoto } from './../entidades/ControleRemoto';
import { Elevador } from './../entidades/Elevador';
import { Televisao } from './../entidades/Televisao';
import { Pessoa } from './../entidades/Pessoa';


let michel = new Pessoa("Michel",new Date("1997-04-25"),1.70);

michel.info();

michel.idadde();

console.log("------------------------------------------");


let elevador = new Elevador(10,15);

elevador.Entrar();
elevador.Entrar();
elevador.Entrar();
elevador.Entrar();
elevador.Entrar();

elevador.Subir();
elevador.Subir();
elevador.Subir();

console.log("Andar: " + elevador.getAndarAtual());
console.log("Ocupantes: " + elevador.getQtdPessElevador());


elevador.Sair();

elevador.Subir();
elevador.Subir();

console.log("Andar: " + elevador.getAndarAtual());
console.log("Ocupantes: " + elevador.getQtdPessElevador());

elevador.Sair();
elevador.Sair();

elevador.Subir();
elevador.Sair();
elevador.Entrar();
elevador.Descer();
elevador.Descer();
elevador.Descer();

console.log("Andar: " + elevador.getAndarAtual());
console.log("Ocupantes: " + elevador.getQtdPessElevador());

console.log("------------------------------------------");

let televisao = new Televisao(60);
let controle = new ControleRemoto(televisao);

controle.info();

controle.pasarCanal();
controle.pasarCanal();
controle.pasarCanal();
controle.pasarCanal();
controle.pasarCanal();

controle.almentarVolume();
controle.almentarVolume();
controle.almentarVolume();
controle.almentarVolume();
controle.almentarVolume();

controle.info();

controle.irParaCanal(30);
controle.almentarVolume();
controle.almentarVolume();
controle.almentarVolume();

controle.info();

controle.voltarCanal();
controle.voltarCanal();
controle.voltarCanal();
controle.voltarCanal();
controle.voltarCanal();
controle.voltarCanal();
controle.voltarCanal();

controle.diminuirVolume();
controle.diminuirVolume();
controle.diminuirVolume();
controle.diminuirVolume();

controle.info();