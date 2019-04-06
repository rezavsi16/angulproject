import { Component, OnInit, Input } from '@angular/core';
import { ProductStructure } from './product.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit.product.component.html',
  providers:[]
})

export class EditProductComponent implements OnInit{
  @Input() product:ProductStructure;

  constructor(){}
  ngOnInit() {
    this.getProducts();
  }

  getProducts(){

  }
    
}

