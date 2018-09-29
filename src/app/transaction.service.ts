
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction'

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.url)
  }

  getTransaction(_id: string): Observable<Transaction>{
    return this.http.get<Transaction>(this.url+_id)
  }

  deleteTransaction(_id: string): Observable<Transaction>{
    console.log("Delete")
    return this.http.delete<Transaction>(this.url+_id)
  }

  addTransaction(transaction: Transaction): Observable<Transaction>{
    return this.http.post<Transaction>(this.url, transaction)
  }

  putTransaction(_id:string, transaction: Transaction): Observable<Transaction>{
    return this.http.put<Transaction>(this.url+_id, transaction)
  }


  url = "/api/transactions/";
}

