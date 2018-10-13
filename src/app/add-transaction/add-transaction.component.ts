import { Component, OnInit, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { Transaction } from '../transaction'

import { TransactionService } from '../transaction.service';
import { Product } from '../product';

import { Router } from '@angular/router'

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})

export class AddTransactionComponent implements OnInit, OnChanges {

  transaction: Transaction = new Transaction();

  names:number[]=[]
  hidden:boolean[]=[]
  
  total:number;


  clientPhone

  transactionR

  constructor(private transactionService: TransactionService, private router: Router) { }

  onSubmit(){
    var sum=0;
    for(let i=0;i<this.transaction.product.length;i++){
      this.transaction.product[i].totals = this.transaction.product[i].total()
      sum = sum + this.transaction.product[i].totals
    }
    this.transaction.total = sum

    this.transactionService.addTransaction(this.transaction).subscribe((transaction) => {

      this.transactionService.throwTransaction(transaction)
      
      this.router.navigate([`transaction/show`])
    })
      
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
    

    this.transaction.product[this.i]=product
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
    this.transaction.product.pop()

    this.hidden.pop(); 
    this.hidden[this.i-1] = false;

    this.names.pop();

    this.i = this.i-1                                                                                                                                                                                                                                                                                                                                                                                                                                     

    //i can't be negative
    if(this.i<0) this.i=0;
  }

  ngOnChanges(changes: SimpleChanges){
    
  }

  ngOnInit() {

    this.transaction.clientPhone=""
    this.transaction.product=[]
  }

}
