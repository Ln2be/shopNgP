import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FindTransactionComponent } from './find-transaction/find-transaction.component';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';

import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { TransactionComponent } from './transaction/transaction.component'

import { HomeComponent } from './home/home.component'
import { FindProductComponent } from './find-product/find-product.component'

import { AddProductComponent } from './add-product/add-product.component'
import { ShowProductComponent } from './show-product/show-product.component'

import { ProductComponent } from './product/product.component'


const routes: Routes = [
{path: 'find/transaction', component: FindTransactionComponent},
{path: 'add/transaction', component: AddTransactionComponent},

{path: 'find/product', component: FindProductComponent},
{path: 'add/product', component: AddProductComponent},

{path: 'transaction/:id', component: ShowTransactionComponent},
{path: 'transaction', component: TransactionComponent},

{path: '', component: HomeComponent},
{path: 'product/:name', component: ShowProductComponent},

{path: 'product', component: ProductComponent},


];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
