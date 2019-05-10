import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './core/register-user/register-user.component';
import { ListUsersComponent } from './core/list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes:Routes = [
  {path:'',component:RegisterUserComponent},
  {path:'list/user',component:ListUsersComponent},
  {path:'register/user',component:RegisterUserComponent},
  {path:'edit/user/:id',component:EditUserComponent}
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
