import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {

  user:User;

  constructor() { 
    this.user = new User;
  }

  ngOnInit() {
  }

  onSubmit(){
    
  }
}
