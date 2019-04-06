import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalcModules } from './calculator/calculator.module';
import { ProductModules } from "./product/ProductModules";
import { Globals } from './GlobalScope';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalcModules,
    ProductModules
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
