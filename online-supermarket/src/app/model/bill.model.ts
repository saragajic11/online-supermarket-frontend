export class Bill {
    public id: number;
    public billDate: Date;
    public totalPrice: number;

    constructor(date: Date, totalPrice: number) {
        this.billDate = date;
        this.totalPrice = totalPrice;
    }
}