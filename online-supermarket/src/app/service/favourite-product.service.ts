import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../model/customer.model';
import { FavouriteProduct } from '../model/favourite-product.model';

@Injectable({
  providedIn: 'root'
})
export class FavouriteProductService {

  constructor(private httpClient: HttpClient) { }

  getFavouriteProductsByCustomerId(id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.get<FavouriteProduct[]>("http://localhost:8083/favourites/byCustomer/" + id, { headers: new HttpHeaders().set('Authorization', token) });
  }
}
