export class Supplier {
    public id: number;
    public supplierName: string;
    public supplierLastname: string;
    public contact: string;

    constructor(name: string, lastname: string, contact: string) {
        this.supplierName = name;
        this.supplierLastname = lastname;
        this.contact = contact;
    }
}