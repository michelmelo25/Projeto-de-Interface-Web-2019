import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../servises/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:User;

  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["id"];
    this.userService.get(id).subscribe(
      (res:User) => {this.user = res}
    )
  }

  onSubmit(){
    this.userService.update(this.user).subscribe(
      (res:User) => {console.log(`${res.firstName} updated.`), this.user = new User()}
    );
  }
}
