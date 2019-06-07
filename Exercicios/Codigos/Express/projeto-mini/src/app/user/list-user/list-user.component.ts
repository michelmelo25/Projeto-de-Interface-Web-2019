import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:User[];

  constructor(private userService:UserService,
              private router:Router) { 
    this.users = [];
  }

  ngOnInit() {
    this.list();
  }

  list(){
    this.userService.list().subscribe(
      (res:User[])=>{
        this.users = res;
      }
    );
  }

  delete(_id:any){
    if(!confirm("Are you sure?")){
      return;
    } 
    
    this.userService.delete(_id).subscribe(
      (res:any)=>{
        console.log(`User id ${_id} deleted!`);
        this.list();
      }
    );
  }

  edit(_id:any){
    //nevegação imperativa
    this.router.navigate(['edit/user',_id]);
  }

}
