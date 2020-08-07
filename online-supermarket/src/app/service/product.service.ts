import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductsByCategory(id: number) {
    return this.httpClient.get<Product[]>('http://localhost:8083/products/byCategory/' + id);
  }
}
