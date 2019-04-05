import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Aula01';
  nome = "Michel";
  idade = 21;

    salvar(){
      // this.nome = nomeInput;
      // this.nome = "Michel " + this.idade;
      // this.idade++;
    }

    mudar(event:any){
      this.nome = event.target.value;
    }
}
