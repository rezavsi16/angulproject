import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductComponent, EditProductComponent } from './product.component';
import { ProductService } from "./product.services";

@NgModule({
    declarations: [
        ProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [ProductService],
    bootstrap: [ProductComponent]
})
export class ProductModules {
}
