import { Component, OnInit, Input } from '@angular/core';
import { ProductComponent, ProductStructure } from './product.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit.product.component.html'
})

export class EditProductComponent {
    @Input() products: ProductStructure;
    
    ngOnInit() {
        this.getDetailProduct();
      }
    getDetailProduct(){
        
    }
}

