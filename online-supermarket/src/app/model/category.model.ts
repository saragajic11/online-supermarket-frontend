export class Category {
    public id: number;
    public categoryName: string;
    public categoryImage: string;

    constructor(id: number, name: string, image: string) {
        this.id = id;
        this.categoryName = name;
        this.categoryImage = image;
    }
}