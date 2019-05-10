import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from './../../servises/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users:User[];

  constructor(private userService:UserService) {
    this.users = [];
   }

  ngOnInit() {
    this.list();
  }

  list(){
    this.userService.list().subscribe(
      (res:User[]) => {this.users = res}
    );
  }

}
