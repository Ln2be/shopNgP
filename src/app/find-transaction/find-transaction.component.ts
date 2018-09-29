import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'

@Component({
  selector: 'app-find-transaction',
  templateUrl: './find-transaction.component.html',
  styleUrls: ['./find-transaction.component.css']
})
export class FindTransactionComponent implements OnInit {

  id

  constructor(private router: Router) { }

  onSubmit(){

    this.router.navigateByUrl('transaction/'+this.id)

  }


  ngOnInit() {
  }

}