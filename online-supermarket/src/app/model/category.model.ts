import { Subcategory } from './subcategory.model';

export class Category {
    public id: number;
    public categoryName: string;
    public categoryImage: string;
    public subcategoryDtos: Subcategory[];

    constructor(name: string) {
        this.categoryName = name;
    }
}