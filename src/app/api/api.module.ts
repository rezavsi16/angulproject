import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ApiComponent } from './api.component';
import { FormsModule } from '@angular/forms';
import { HttpServices } from '../services/httpServices';


@NgModule({
  declarations: [
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpServices],
  bootstrap: [ApiComponent]
})
export class ApiModules { }
