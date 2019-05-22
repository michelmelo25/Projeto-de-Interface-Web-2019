import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../servises/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:User;

  constructor(private activatedRoute:ActivatedRoute, private userService:UserService, private router:Router) { 
    this.user = new User;
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["id"];
    this.userService.retrieveById(id).subscribe(
      (res:User) => {this.user = res}
    )
  }

  onSubmit(){
    this.userService.update(this.user).subscribe(
      (res:User) => {
        console.log(`${res.firstName} updated.`); 
        this.user = new User();
        this.router.navigate(['list/user']);
      }
    );
  }
}
