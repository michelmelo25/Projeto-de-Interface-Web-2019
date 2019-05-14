import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servises/user.service';
import { Post } from 'src/app/models/post';
import { User } from './../../models/user';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {

  post:Post;

  constructor(private userServise:UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    // adicionar informacoes faltantes ao post (altor, data da postagem)
    // this.post.likes = 0;
    // this.post.dataPostagem
    this.userServise.registerPost(this.post, 1).subscribe(
      (res:User) => {console.log("Post add a " + res.nome)}
    )
  }

}
