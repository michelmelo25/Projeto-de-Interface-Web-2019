import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LoginUserComponent } from './core/login-user/login-user.component';
import { CadastroUserComponent } from './core/cadastro-user/cadastro-user.component';
import { PostUserComponent } from './core/post-user/post-user.component';
import { TimeLineUserComponent } from './core/time-line-user/time-line-user.component';
import { HomeComponent } from './core/home/home.component';
import { PerfilComponent } from './core/perfil/perfil.component';

const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginUserComponent},
  {path:'cadastro',component:CadastroUserComponent},
  {path:'timeline',component:TimeLineUserComponent},
  {path:'perfil',component:PerfilComponent}
  // {path:'edit/user/:id',component:EditUserComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
