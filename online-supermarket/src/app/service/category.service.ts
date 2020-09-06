import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories() {
    return this.httpClient.get<Category[]>('http://localhost:8083/categories')
  }

  getCategoryById(id: number) {
    return this.httpClient.get<Category>("http://localhost:8083/categories/" + id);
  }

  deleteCategory(id: number) {
    return this.httpClient.delete("http://localhost:8083/categories/" + id);
  }

  postCategory(category: Category) {
    return this.httpClient.post<Category>("http://localhost:8083/categories", category);
  }

  postCategoryImage(formData: FormData, id: number) {
    return this.httpClient.put("http://localhost:8083/categories/addImage/" + id, formData);
  }

  updateCategory(id: number, category: Category) {
    return this.httpClient.put("http://localhost:8083/categories/" + id, category);
  }
}
