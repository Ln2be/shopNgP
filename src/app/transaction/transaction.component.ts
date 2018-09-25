import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions

  constructor(private transactionService: TransactionService) { }

  getTransaction(): void{
    this.transactionService.getTransactions().subscribe(transactions => this.transactions=transactions)
  }

  ngOnInit() {
    this.getTransaction()
  }

}
