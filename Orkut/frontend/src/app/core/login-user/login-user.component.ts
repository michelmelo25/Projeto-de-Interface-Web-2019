import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servises/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  email: string;
  senha: string;

  constructor(private userServise:UserService) {}

  ngOnInit() {
  }

  onSubmit(){
    this.userServise.login(this.email).subscribe(
      (res:User) => { if(res[0].senha == this.senha){
        console.log(res.login+"Logado");
      }else{
        console.log("usuario nao logado");
        console.log("Senha informada : " + this.senha + " Senha desejada: " + res.senha);
        console.log(res[0].nome);
      }}
    )
  }
}
