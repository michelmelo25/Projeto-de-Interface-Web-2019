import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [RegisterUserComponent, ListUsersComponent, EditUserComponent, LoginUserComponent],
  exports: [RegisterUserComponent, ListUsersComponent, EditUserComponent, LoginUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot()
  ]
})
export class CoreModule { }
