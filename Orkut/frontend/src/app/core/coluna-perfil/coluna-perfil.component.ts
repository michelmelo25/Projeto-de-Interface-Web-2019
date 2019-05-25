import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coluna-perfil',
  templateUrl: './coluna-perfil.component.html',
  styleUrls: ['./coluna-perfil.component.css']
})
export class ColunaPerfilComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  // editar para ficar conforme os demais
  perfil(){
    this.route.navigate(['/perfil']);
  }

  amigos(id:number){
    this.route.navigate(['/amigos/user',id]);
  }

  recados(id:number){
    this.route.navigate(['/recados/user',id]);
  }

  fotos(id:number){
    this.route.navigate(['/fotos/user',id]);
  }

  videos(id:number){
    this.route.navigate(['/videos/user',id]);
  }
}
