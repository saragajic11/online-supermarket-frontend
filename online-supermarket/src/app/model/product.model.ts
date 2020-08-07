import { Producer } from './producer.model';
import { Subcategory } from './subcategory.model';

export class Product {
    public barCode: string;
    public productName: string;
    public productDescription: string;
    public productPrice: number;
    public amount: number;
    public image: string;
    public isOnDiscount: boolean;
    public producerDto: Producer;
    public subcategoryDto: Subcategory;

    constructor(barCode: string, name: string, description: string, price: number, amount: number, image: string, isOnDiscount: boolean, producerDto: Producer, subcategoryDto: Subcategory) {
        this.barCode = barCode;
        this.productName = name;
        this.productDescription = description;
        this.productPrice = price;
        this.amount = amount;
        this.image = image;
        this.isOnDiscount = isOnDiscount;
        this.producerDto = producerDto;
        this.subcategoryDto = subcategoryDto;
    }
}