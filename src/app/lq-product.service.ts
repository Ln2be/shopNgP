
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { LqProduct } from './lqProduct'

import { CONSTS } from './consts'

@Injectable({
  providedIn: 'root'
})
export class LqProductService {

  constructor(private http: HttpClient) { }

  getLqProducts(): Observable<LqProduct[]>{
    return this.http.get<LqProduct[]>(this.url)
  }

  getLqProduct(_id: string): Observable<LqProduct>{
    return this.http.get<LqProduct>(this.url+"/"+_id)
  }

  deleteLqProduct(_id: string): Observable<LqProduct>{
    return this.http.delete<LqProduct>(this.url+"/"+_id)
  }

  addLqProduct(lqProduct: LqProduct): Observable<LqProduct>{
    return this.http.post<LqProduct>(this.url, lqProduct)
  }

  putLqProduct(_id:string, lqProduct: LqProduct): Observable<LqProduct>{
    return this.http.put<LqProduct>(this.url+"/"+_id, lqProduct)
  }


  url = CONSTS.url + "lq.products/"
  // url = "http://localhost:3000/api/lq_products/";
}
