import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TransactionComponent } from './transaction/transaction.component';
import { LQProductComponent } from './lqproduct/lqproduct.component';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    LQProductComponent,
    ShowTransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
