import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';


@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.css']
})
export class ShowTransactionComponent implements OnInit {

  transaction

  constructor(private route: ActivatedRoute, private transactionService: TransactionService) { }
  
  goTo = this.route.snapshot.paramMap.get("goTo")

  getTransaction(id:string): void{
    this.transactionService.getTransaction(id).subscribe((transaction) => {
      this.transaction = transaction;
    })
  }

  delete(){
    this.transactionService.deleteTransaction(this.transaction.id).subscribe()
  }

  catchTransaction(){
    this.transactionService.catchTransaction().subscribe(transaction=>{
      this.transaction=transaction
    })
  }
  
  ngOnInit() {
    if(this.goTo=="show") this.catchTransaction()
    else this.getTransaction(this.goTo)
  }

}