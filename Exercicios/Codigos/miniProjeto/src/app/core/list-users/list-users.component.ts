import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from './../../servises/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users:User[];

  constructor(private userService:UserService, private router:Router) {
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

  delete(id:number){
    this.userService.delete(id).subscribe(
      (res:any) => {this.list()}
    );
  }

  edit(id:number){
      this.router.navigate(['edit/user',id])
  }

}
