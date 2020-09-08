import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token = localStorage.getItem('token');
    return this.httpClient.get<Product>("http://localhost:8083/products/" + barCode, { headers: new HttpHeaders().set('Authorization', token) });
  }

  deleteProduct(barCode: string) {
    const token = localStorage.getItem('token');
    return this.httpClient.delete("http://localhost:8083/products/" + barCode, { headers: new HttpHeaders().set('Authorization', token) });
  }

  postProductImage(formData: FormData, barCode: string) {
    const token = localStorage.getItem('token');
    return this.httpClient.put("http://localhost:8083/products/addImage/" + barCode, formData, { headers: new HttpHeaders().set('Authorization', token) });
  }

  postProduct(product: PostProduct) {
    const token = localStorage.getItem('token');
    return this.httpClient.post("http://localhost:8083/products", product, { headers: new HttpHeaders().set('Authorization', token) });
  }

  updateProduct(barCode: string, product: PostProduct) {
    const token = localStorage.getItem('token');
    return this.httpClient.put("http://localhost:8083/products/" + barCode, product, { headers: new HttpHeaders().set('Authorization', token) });
  }

  getProductsBySubcategory(subcategoryId: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.get<Product[]>("http://localhost:8083/products/bySubcategory/" + subcategoryId, {headers: new HttpHeaders().set('Authorization', token)})
  }

  searchProduct(searchValue: string) {
    return this.httpClient.get<Product[]>("http://localhost:8083/products/byName?filter=" + searchValue);
  }

  increaseAmount(barCode: string, amount: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.put("http://localhost:8083/products/increase-amount/" + barCode, amount, {headers: new HttpHeaders().set('Authorization', token)});
  }

  decreaseAmount(barCode: string, amount: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.put("http://localhost:8083/products/decrease-amount/" + barCode, amount, {headers: new HttpHeaders().set('Authorization', token)});
  }
}
