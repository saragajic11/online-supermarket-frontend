import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../model/category.model';
import { Subcategory } from '../model/subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private httpClient: HttpClient) { }
  
  getAllSubcategories() {
    const token = localStorage.getItem('token');
    return this.httpClient.get<Subcategory[]>("http://localhost:8083/subcategories", {headers: new HttpHeaders().set('Authorization', token)});
  }

  getSubcategoryById(id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.get<Subcategory>("http://localhost:8083/subcategories/" + id, {headers: new HttpHeaders().set('Authorization', token)});
  }

  deleteSubcategory(id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.delete("http://localhost:8083/subcategories/" + id, {headers: new HttpHeaders().set('Authorization', token)})
  }

  postSubcategory(subcategory: Subcategory) {
    const token = localStorage.getItem('token');
    return this.httpClient.post("http://localhost:8083/subcategories", subcategory, {headers: new HttpHeaders().set('Authorization', token)})
  }

  updateSubcategory(subcategory: Subcategory, id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.put("http://localhost:8083/subcategories/" + id, subcategory, {headers: new HttpHeaders().set('Authorization', token)});
  }

  getByCategoryId(id: number) {
    return this.httpClient.get<Subcategory[]>("http://localhost:8083/subcategories/byCategory/" + id);
  }

}
