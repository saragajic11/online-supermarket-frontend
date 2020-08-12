export class Producer {
    public id: number;
    public producerName: string;
    public producerContact: string;

    constructor(name: string, contact: string) {
        this.producerName = name;
        this.producerContact = contact;
    }
}