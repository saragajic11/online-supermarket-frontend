import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  deleteFavouriteProduct(id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.delete("http://localhost:8083/favourites/" + id, { headers: new HttpHeaders().set('Authorization', token) });
  }

  addToFavourites(favouriteProduct: FavouriteProduct) {
    const token = localStorage.getItem('token');
    return this.httpClient.post("http://localhost:8083/favourites", favouriteProduct, { headers: new HttpHeaders().set('Authorization', token) });
  }

  getByCustomerIdAndProductId(customerId: number, barCode: string) {
    const token = localStorage.getItem('token');
    if (token != null) {
      return this.httpClient.get<FavouriteProduct>("http://localhost:8083/favourites/byCustomerAndBook?customerId=" + customerId + "&barCode=" + barCode, { headers: new HttpHeaders().set('Authorization', token) })
    }
  }
}
