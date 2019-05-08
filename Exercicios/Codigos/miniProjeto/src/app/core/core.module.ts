import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [RegisterUserComponent],
  exports: [RegisterUserComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
