import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PizzaComponent } from './pizza/pizza.component';
import { IncDecComponent } from './inc-dec/inc-dec.component';

@NgModule({
  declarations: [
    AppComponent,
    // PizzaComponent,
    IncDecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
