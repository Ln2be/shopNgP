
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction'

import { catchError, map, tap } from 'rxjs/operators';
import {CONSTS } from './consts'

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.url)
  }

  getTransaction(_id: string): Observable<Transaction>{
    return this.http.get<Transaction>(this.url+_id).pipe(
      catchError(this.handleError<Transaction>(''))
    )
  }

  deleteTransaction(_id: string): Observable<Transaction>{
    return this.http.delete<Transaction>(this.url+_id)
  }

  addTransaction(transaction: Transaction): Observable<Transaction>{
    return this.http.post<Transaction>(this.url, transaction)
  }

  putTransaction(_id:string, transaction: Transaction): Observable<Transaction>{
    return this.http.put<Transaction>(this.url+_id, transaction)
  }

  Otransaction:Observable<Transaction>

  throwTransaction(transaction:Transaction): void{
    this.Otransaction = Observable.create((observer)=>{
      observer.next(transaction)
      observer.complete()
    })
  }

  catchTransaction(): Observable<Transaction>{
    return this.Otransaction;
  }

  url = CONSTS.url+"transactions/"


  // url = "http://localhost:3000/api/transactions/";

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}