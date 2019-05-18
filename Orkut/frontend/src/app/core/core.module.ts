import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { PostUserComponent } from './post-user/post-user.component';
import { TimeLineUserComponent } from './time-line-user/time-line-user.component';
import { ListaPostsUserComponent } from './lista-posts-user/lista-posts-user.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [CadastroUserComponent, NavbarComponent, LoginUserComponent, PostUserComponent, TimeLineUserComponent, ListaPostsUserComponent, HomeComponent],
  exports: [CadastroUserComponent, NavbarComponent, LoginUserComponent, PostUserComponent, TimeLineUserComponent, ListaPostsUserComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
