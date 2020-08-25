export class Customer {
    public id: number;
    public username: string;
    public name: string;
    public lastname: string;
    public email: string;
    public password: string;
    public age: number;
    public country: string;
    public city: string;
    public street: string;
    public role: string;

    constructor(username: string, name: string, lastname: string, email: string, password: string, age: number, country: string, city: string, street: string, role: string) {
        this.username = username;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.age = age;
        this.country = country;
        this.city = city;
        this.street = street;
        this.role = role;
    }
}