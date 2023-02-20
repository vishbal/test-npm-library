import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimitivesModule } from 'ng-primitives-scadea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimitivesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
