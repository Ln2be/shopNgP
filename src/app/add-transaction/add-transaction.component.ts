import { Component, OnInit, Renderer2 } from '@angular/core';
import { Transaction } from '../transaction'
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  transaction: Transaction = {
    clientPhone:"enter phone",
    product:[]
  };
  names:number[]=[]

  constructor(private transactionService: TransactionService) { }

  onSubmit(){
    this.transactionService.addTransaction(this.transaction).subscribe()
  }

  i:number=0;

  showName(){
    this.transaction.product[this.i]={
      name:"enter name",
      quantity:0
    }
    this.names.push(this.i)
    this.i = this.i+1
  }

  deleteName(){
    this.transaction.product.pop()
    this.names.pop();
    this.i = this.i-1
  }


  ngOnInit() {
  }

}
