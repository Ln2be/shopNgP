import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {

  name = ""

  constructor(private router: Router) { }

  onSubmit(){

    this.router.navigateByUrl('product/'+this.name)

  }

  ngOnInit() {
  }

}
