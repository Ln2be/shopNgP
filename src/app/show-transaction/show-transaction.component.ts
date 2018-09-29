import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TransactionService } from '../transaction.service';


@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.css']
})
export class ShowTransactionComponent implements OnInit {

  transaction


  constructor(private route: ActivatedRoute, private transactionService: TransactionService) { }

  id = this.route.snapshot.paramMap.get("id")
  

  getTransaction(id:string): void{
    this.transactionService.getTransaction(id).subscribe((transaction) => {
      this.transaction = transaction;
    })
  }

  delete(){
    this.transactionService.deleteTransaction(this.transaction.id).subscribe()
  }

  ngOnInit() {
    this.getTransaction(this.id)
  }

}