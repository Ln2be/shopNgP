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


  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  name = this.route.snapshot.paramMap.get("name")


  getProduct(id:string): void{
    this.productService.getProduct(id).subscribe((product) => {
      this.product = product;
    })

    console.log(this.name)
  }

  delete(){
    this.productService.deleteProduct(this.name).subscribe()
  }

  ngOnInit() {
    this.getProduct(this.name)
  }

}
