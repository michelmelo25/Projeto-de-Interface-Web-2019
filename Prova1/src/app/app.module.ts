import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Questao01Component } from './questao01/questao01.component';
import { Questao02Component } from './questao02/questao02.component';
import { Questao03Component } from './questao03/questao03.component';
import { Questao04Component } from './questao04/questao04.component';

@NgModule({
  declarations: [
    AppComponent,
    Questao01Component,
    Questao02Component,
    Questao03Component,
    Questao04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
