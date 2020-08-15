import { Producer } from './producer.model';
import { Subcategory } from './subcategory.model';

export class PostProduct {
    public barCode: string;
    public productName: string;
    public productDescription: string;
    public productPrice: number;
    public amount: number;
    public isOnDiscount: boolean;
    public discount: number;
    public producerDto: Producer;
    public subcategoryDto: Subcategory;

        constructor(barCode: string, name: string, description: string, price: number, amount: number, isOnDiscount: boolean, producerDto: Producer, subcategoryDto: Subcategory, discount?: number) {
        this.barCode = barCode;
        this.productName = name;
        this.productDescription = description;
        this.productPrice = price;
        this.amount = amount;
        this.isOnDiscount = isOnDiscount;
        this.producerDto = producerDto;
        this.subcategoryDto = subcategoryDto;
        this.discount = discount;
    }
}