import {Customer } from './customer.model';
import { Product } from './product.model';

export class FavouriteProduct {
    public id: number;
    public customerDto: Customer;
    public productDto: Product;
}