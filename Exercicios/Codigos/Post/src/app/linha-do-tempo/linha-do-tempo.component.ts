import { Component } from '@angular/core';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent {

  posts = []
  contador=0;
  enviar(nome:string, texto:string){
    this.posts.push({id: this.contador, nome:nome, texto:texto, likes:0});
    this.contador++
    console.log("Teste: ");
    this.posts.forEach(function(post){
      console.log(post)
    })
  }

  findPost(id:number):any{
    for(let post of this.posts){
      if(post.id==id) 
        post.likes++;
      }
    }
}
