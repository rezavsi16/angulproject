import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductStructure } from './product.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit.product.component.html',
  providers:[]
})

export class EditProductComponent implements OnInit{
  @Input() product:ProductStructure;
  message:object;
  test:object;

  constructor(private data:DataService){}
  ngOnInit(){
    this.getProducts();
  }
  getProducts(){
    //Just Once Before Refresh After Refresh Will be Removed Because Angu cant keep data. (SHARED DATA SERVICE)
    this.data.currentMessage.subscribe(message => this.message = message);

    //Keep Data On Memory
    this.message = JSON.parse(localStorage.getItem("editProduct"));

    // this.test = JSON.parse(localStorage.getItem("editProduct"));
    // console.log(this.test.id);
  }
  
    
}

