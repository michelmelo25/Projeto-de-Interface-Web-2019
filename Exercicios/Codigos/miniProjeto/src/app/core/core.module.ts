import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [RegisterUserComponent, ListUsersComponent, EditUserComponent, LoginUserComponent, RegisterProductComponent, ListProductComponent, EditProductComponent],
  exports: [RegisterUserComponent, ListUsersComponent, EditUserComponent, LoginUserComponent, RegisterProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot()
  ]
})
export class CoreModule { }
