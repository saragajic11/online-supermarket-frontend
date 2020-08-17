import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { PostProduct } from '../model/postProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductsByCategory(id: number) {
    return this.httpClient.get<Product[]>('http://localhost:8083/products/byCategory/' + id);
  }

  getProductByBarCode(barCode: string) {
    return this.httpClient.get<Product>("http://localhost:8083/products/" + barCode);
  }

  deleteProduct(barCode: string) {
    return this.httpClient.delete("http://localhost:8083/products/" + barCode);
  }

  postProductImage(formData: FormData, barCode: string) {
    return this.httpClient.put("http://localhost:8083/products/addImage/" + barCode, formData);
  }

  postProduct(product: PostProduct) {
    return this.httpClient.post("http://localhost:8083/products", product);
  }

  updateProduct(barCode: string, product: PostProduct) {
    return this.httpClient.put("http://localhost:8083/products/" + barCode, product);
  }
}
