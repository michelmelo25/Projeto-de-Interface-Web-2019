import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostDaLinhaComponent } from './post-da-linha/post-da-linha.component';

@NgModule({
  declarations: [
    AppComponent,
    LinhaDoTempoComponent,
    PostDaLinhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
