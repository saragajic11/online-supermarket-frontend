import { Category } from './category.model';

export class Subcategory {
    public id: number;
    public name: string;
    public categoryDto: Category;

    constructor(name: string, categoryDto: Category) {
        this.name = name;
        this.categoryDto = categoryDto;
    }
}