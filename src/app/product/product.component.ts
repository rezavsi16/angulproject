import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  providers:[]
})

export class ProductComponent implements OnInit {
    
    constructor(private productService:ProductService){}
    
    selectedProduct:ProductStructure;
    products: ProductStructure[];

    ngOnInit() {
        this.getProducts();
      }
    
      onSelect(productValue: ProductStructure): void {
        this.selectedProduct = productValue;
      }
    
      getProducts(): void {
        this.productService.getProducts()
            .subscribe(products => this.products = products);
      }
}
export class ProductStructure {
    id:number;
    name:string;
}


