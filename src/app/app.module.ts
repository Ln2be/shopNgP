import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TransactionComponent } from './transaction/transaction.component';
import { LQProductComponent } from './lqproduct/lqproduct.component';

import { ShowTransactionComponent } from './show-transaction/show-transaction.component';
import { FindTransactionComponent } from './find-transaction/find-transaction.component';

import { AppRoutingModule } from './/app-routing.module';
import {FormsModule} from '@angular/forms';

import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { HomeComponent } from './home/home.component';

import { ProductComponent } from './product/product.component';
import { FindProductComponent } from './find-product/find-product.component';

import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { OthersComponent } from './others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,

    LQProductComponent,
    ShowTransactionComponent,

    FindTransactionComponent,
    AddTransactionComponent,

    HomeComponent,

    ProductComponent,
    FindProductComponent,
    AddProductComponent,
    
    ShowProductComponent,
    
    OthersComponent,
    
  ],
  exports:[
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
