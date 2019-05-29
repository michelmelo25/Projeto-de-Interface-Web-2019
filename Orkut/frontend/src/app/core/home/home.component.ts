import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/servises/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  proximosAni:User[];

  constructor(private userService:UserService) { 
    this.proximosAni = [];
  }

  ngOnInit() {
  }

}
