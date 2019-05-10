import { Component, OnInit } from '@angular/core';
import { UserService } from './../../servises/user.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User;

  constructor(private userService:UserService) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.register(this.user).subscribe(
      (res:User) => {console.log(`${res.firstName} added.`), this.user = new User()}
    );
  }

}
