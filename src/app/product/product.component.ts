import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from './product.services';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  providers:[]
})

export class ProductComponent implements OnInit {
    
    constructor(private productService:ProductService,private data: DataService){}
    

    selectedProduct:ProductStructure;
    products: ProductStructure[];

    ngOnInit() {
        this.getProducts();
      }
    
      onSelect(productValue: ProductStructure): void {
        this.selectedProduct = productValue;

        //Just Once Before Refresh After Refresh Will be Removed Because Angu cant keep data. (SHARED DATA SERVICE)
        this.data.changeMessage(productValue);
        
        //Menyimpan Data Sementara Di Memory
        localStorage.setItem("editProduct", JSON.stringify(productValue));

        
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


