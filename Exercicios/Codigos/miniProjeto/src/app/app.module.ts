import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './core/register-user/register-user.component';
import { ListUsersComponent } from './core/list-users/list-users.component';
import { EditUserComponent } from './core/edit-user/edit-user.component';
import { LoginUserComponent } from './core/login-user/login-user.component';
import { RegisterProductComponent } from './core/register-product/register-product.component';
import { ListProductComponent } from './core/list-product/list-product.component';
import { EditProductComponent } from './core/edit-product/edit-product.component';

const routes:Routes = [
  {path:'',component:LoginUserComponent},
  {path:'list/user',component:ListUsersComponent},
  {path:'register/user',component:RegisterUserComponent},
  {path:'edit/user/:id',component:EditUserComponent},
  {path:'register/product',component:RegisterProductComponent},
  {path:'list/products',component:ListProductComponent},
  {path:'edit/product/:id',component:EditProductComponent}
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
