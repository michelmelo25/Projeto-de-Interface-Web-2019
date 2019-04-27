import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-da-linha',
  templateUrl: './post-da-linha.component.html',
  styleUrls: ['./post-da-linha.component.css']
})
export class PostDaLinhaComponent {

  @Output() id = new EventEmitter;

  @Input() post:{
    id: Number,
    nome: String,
    texto: String,
    likes: Number
  };  

  like(){
    this.id.emit(this.post.id);
  }
}
