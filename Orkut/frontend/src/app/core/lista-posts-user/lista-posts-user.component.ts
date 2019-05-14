import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { UserService } from 'src/app/servises/user.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-lista-posts-user',
  templateUrl: './lista-posts-user.component.html',
  styleUrls: ['./lista-posts-user.component.css']
})
export class ListaPostsUserComponent implements OnInit {

  posts:Post[];

  constructor(private userServise:UserService) { }

  ngOnInit() {
    this.userServise.get(1).subscribe(
      (res:User) => {
        this.posts = res.posts, 
        console.log(res.posts)
      }
    )
  }

  like(){

  }
}
