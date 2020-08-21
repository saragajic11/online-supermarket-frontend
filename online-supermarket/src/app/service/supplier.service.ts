import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Supplier } from '../model/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient) { }

  getAllSuppliers() {
    const token = localStorage.getItem('token');
    return this.httpClient.get<Supplier[]>('http://localhost:8083/suppliers', {headers: new HttpHeaders().set('Authorization', token)});
  }

  addSupplier(supplier: Supplier) {
    const token = localStorage.getItem('token');
    return this.httpClient.post("http://localhost:8083/suppliers/", supplier, {headers: new HttpHeaders().set('Authorization', token)});
  }

  deleteSupplier(id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.delete("http://localhost:8083/suppliers/"+ id, {headers: new HttpHeaders().set('Authorization', token)});
  }

  getSupplierById(id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.get<Supplier>("http://localhost:8083/suppliers/" + id, {headers: new HttpHeaders().set('Authorization', token)});
  }

  editSupplier(supplier: Supplier, id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.put("http://localhost:8083/suppliers/" + id, supplier, {headers: new HttpHeaders().set('Authorization', token)});
  }
}
