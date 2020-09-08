export class ConfirmPurchase {
    public customerId: number;
    public billId: number;

    constructor(customer: number, bill: number) {
        this.customerId = customer;
        this.billId = bill;
    }
}