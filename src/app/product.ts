export class Product {
    _id?:string
    name: string
    quantity: number
    price?:number
    s_price?:number
    totals?:number

    total() {
        return this.quantity * this.s_price;
    }

}