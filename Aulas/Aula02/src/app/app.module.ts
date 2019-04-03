import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from  '@ng-bootstrap/ng-bootstrap';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { PessoaCardComponent } from './pessoa-card/pessoa-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerPopupComponent,
    PessoaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
