import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { ProductService} from '../product.service'
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product[]=[]
  names:number[]=[]

  hidden:boolean[]=[]

  constructor(private productService: ProductService, private router: Router) { }

  onSubmit(){
    this.productService.addProduct(this.product).subscribe()
    this.productService.throwProduct(this.product)

    this.router.navigate([`product/add`])
  }


  i:number=0;

  showName(){
    if((this.names.indexOf(this.i)>-1)){
      this.i = this.i +1;
      console.log(true)
    }

    let product = new Product();

    product.quantity=null
    product.s_price=null
    

    this.product[this.i]=product
    this.hidden.push(false) 

    this.names.push(this.i)

    if(this.i>0){
      this.hidden[this.i-1] = true;  
    }  


    this.i = this.i+1

  }

  deleteName(){

    if(!(this.names.indexOf(this.i)>-1)){
      this.i = this.i -1;
      console.log(true)
    }
    this.product.pop()

    this.hidden.pop(); 
    this.hidden[this.i-1] = false;

    this.names.pop();

    this.i = this.i-1                                                                                                                                                                                                                                                                                                                                                                                                                                     

    //i can't be negative
    if(this.i<0) this.i=0;
  }


  ngOnInit() {
  }

}
