import { Component, OnInit } from '@angular/core';
import { LqProductService } from '../lq-product.service'


@Component({
  selector: 'app-lqproduct',
  templateUrl: './lqproduct.component.html',
  styleUrls: ['./lqproduct.component.css']
})
export class LQProductComponent implements OnInit {

  lqProducts

  constructor(private lqProductService: LqProductService) { }
  
  getProducts(): void{
    this.lqProductService.getLqProducts().subscribe(lqProducts => this.lqProducts = lqProducts)
  }

  ngOnInit() {
    this.getProducts()
  }

}
