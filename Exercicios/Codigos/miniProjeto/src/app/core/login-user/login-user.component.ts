import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
import { UserService } from './../../servises/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user:User;

  constructor(private userServise:UserService, private router:Router, private toasty:ToastrService) { }

  ngOnInit() {
    this.user = new User;
  }

  onSubmit(){
    this.userServise.retrieveByLogin(this.user.login).subscribe(
      (res:User[]) => {
        if(res.length > 0){
          if(res[0].password == this.user.password){
            this.router.navigate(['/list/user']);
          }else{
            this.toasty.error("Invalid password!") 
          }
        }else{
          this.toasty.error("User does not exist!") 
        }
      }
    );
  }
}
