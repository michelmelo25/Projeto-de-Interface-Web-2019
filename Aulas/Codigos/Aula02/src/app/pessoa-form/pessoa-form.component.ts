import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {
  nome = "";
  clicou = false;
  contador = 0;

  @Output() pessoaSalva = new EventEmitter

  salvar(nomeInput:string){
    this.nome = nomeInput;
    this.clicou = true;
    this.contador++;
    let pForm = {
      nome: this.nome,
      id: this.contador
    };
    console.log(pForm);
    this.pessoaSalva.emit(pForm);
  }
}
