import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }
  customer = new BehaviorSubject<Customer>(null);

  getCustomerByToken() {
    const token = localStorage.getItem('token');
    if (token != null) {
      return this.httpClient.get<Customer>("http://localhost:8083/customers/token", { headers: new HttpHeaders().set('Authorization', token) })
    }
  }

  emitCustomer(customer: Customer) {
    this.customer.next(customer);
  }

  getLoggedInCustomer() {
    return this.customer.asObservable();
  }
}
