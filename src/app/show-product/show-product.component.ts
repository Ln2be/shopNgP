import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Product } from '../product';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  product: Product
  products:Product[]

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  name = this.route.snapshot.paramMap.get("name")


  getProduct(name:string): void{
    this.productService.getProduct(name).subscribe((product) => {
      this.product = product;
    })

  }

  catchProduct(): void{
    this.productService.catchProduct().subscribe((products)=>{
      this.products = products
    })
  }

  ngOnInit() {
    if(this.name=="add") this.catchProduct();
    else this.getProduct(this.name);
  }

}
