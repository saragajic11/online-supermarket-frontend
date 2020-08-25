import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../model/auth-response.model';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    return this.httpClient.post<AuthResponse>("http://localhost:8083/authenticate", {username: username, password: password});
  }

  register(customer: Customer) {
    return this.httpClient.post("http://localhost:8083/customers/register", customer);
  }
}
