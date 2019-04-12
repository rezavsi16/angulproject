import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CalcComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';
import { CalcService } from '../services/calculator.services';
import { HttpServices } from '../services/httpServices';


@NgModule({
  declarations: [
    CalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CalcService,HttpServices],
  bootstrap: [CalcComponent]
})
export class CalcModules { }
