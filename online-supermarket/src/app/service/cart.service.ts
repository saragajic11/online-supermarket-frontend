import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  getCartItemsByCustomer(customerId: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.get<Cart[]>("http://localhost:8083/cart/byCustomer/" + customerId, { headers: new HttpHeaders().set('Authorization', token) });
  }

  deleteCartItem(id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.delete("http://localhost:8083/cart/" + id, { headers: new HttpHeaders().set('Authorization', token) });
  }

  postCartItem(cart: Cart) {
    const token = localStorage.getItem('token');
    return this.httpClient.post("http://localhost:8083/cart", cart, { headers: new HttpHeaders().set('Authorization', token) })
  }

  getCartItemByCustomerAndProduct(customerId: number, barCode: string) {
    const token = localStorage.getItem('token');
    return this.httpClient.get<Cart>("http://localhost:8083/cart/byCustomerAndProduct?customerId=" + customerId + "&barCode=" + barCode, { headers: new HttpHeaders().set('Authorization', token) });
  }
}
