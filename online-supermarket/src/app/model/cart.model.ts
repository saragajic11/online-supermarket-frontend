import { Customer } from './customer.model';
import { Product } from './product.model';
import { BuiltinFunctionCall } from '@angular/compiler/src/compiler_util/expression_converter';
import { Bill } from './bill.model';

export class Cart {
    public id: number;
    public amount: number;
    public customerDto: Customer;
    public productDto: Product;
    public billDto: Bill;

    constructor(amount: number, customer: Customer, product: Product, bill?: Bill) {
        this.amount = amount;
        this.customerDto = customer;
        this.productDto = product;
        this.billDto = bill;
    }
}