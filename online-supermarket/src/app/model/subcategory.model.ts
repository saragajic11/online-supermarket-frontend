import { Category } from './category.model';

export class Subcategory {
    public id: number;
    public name: string;
    public categoryDto: Category;

    constructor(id: number, name: string, categoryDto: Category) {
        this.id = id;
        this.name = name;
        this.categoryDto = categoryDto;
    }
}