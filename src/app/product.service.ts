import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs'
import {Product } from './product'

import { CONSTS } from './consts'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }

  getProduct(_id: string): Observable<Product>{
    return this.http.get<Product>(this.url+_id)
  }

  deleteProduct(_id: string): Observable<Product>{
    console.log("Delete")
    return this.http.delete<Product>(this.url+_id)
  }

  addProduct(product: Product[]): Observable<Product[]>{
    return this.http.post<Product[]>(this.url, product)
  }

  putProduct(_id:string, product: Product): Observable<Product>{
    return this.http.put<Product>(this.url+_id, product)
  }

OProduct:Observable<Product[]>

  throwProduct(product:Product[]): void{
    this.OProduct = Observable.create((observer)=>{
      observer.next(product)
      observer.complete()
    })
  }

  catchProduct(): Observable<Product[]>{
    return this.OProduct;
  }
  

  url = CONSTS.url+"products/"
  // url = "http://localhost:3000/api/products/";

}
