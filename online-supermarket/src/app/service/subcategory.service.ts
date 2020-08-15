import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category.model';
import { Subcategory } from '../model/subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private httpClient: HttpClient) { }
  
  getAllSubcategories() {
    return this.httpClient.get<Subcategory[]>("http://localhost:8083/subcategories");
  }

  getSubcategoryById(id: number) {
    return this.httpClient.get<Subcategory>("http://localhost:8083/subcategories/" + id);
  }

}
