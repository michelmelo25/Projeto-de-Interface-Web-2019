import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@NgModule({
  declarations: [RegisterUserComponent, ListUsersComponent, EditUserComponent],
  exports: [RegisterUserComponent, ListUsersComponent, EditUserComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
