import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from  '@ng-bootstrap/ng-bootstrap';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeadComponent,
    BodyComponent,
    FooterComponent,
    DatepickerPopupComponent
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
