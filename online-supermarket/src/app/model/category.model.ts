import { Subcategory } from './subcategory.model';

export class Category {
    public id: number;
    public categoryName: string;
    public categoryImage: string;
    public subcategoryDtos: Subcategory[];

    constructor(id: number, name: string, image: string, subcategoryDtos: Subcategory[]) {
        this.id = id;
        this.categoryName = name;
        this.categoryImage = image;
        this.subcategoryDtos = subcategoryDtos;
    }
}