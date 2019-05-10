import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [RegisterUserComponent, ListUsersComponent],
  exports: [RegisterUserComponent, ListUsersComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
