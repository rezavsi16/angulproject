import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { ProductService } from "./product.services";
import { EditProductComponent } from './product.edit.component';
import { Globals } from '../GlobalScope';

@NgModule({
    declarations: [
        ProductComponent,
        EditProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [ProductService,AppRoutingModule,Globals],
    bootstrap: [ProductComponent]
})
export class ProductModules {
}
