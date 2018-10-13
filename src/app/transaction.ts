import { Product } from './product'
export class Transaction {
    id?:string
    clientPhone:string
    product: Product[]
    total?:number

    totals() {
        var sum=0;
        for(let i=0;i<this.product.length;i++){
            sum = sum + this.product[i].total()
        }
        return sum;
    }
}
