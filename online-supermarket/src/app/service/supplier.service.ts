import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../model/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient) { }

  getAllSuppliers() {
    return this.httpClient.get<Supplier[]>('http://localhost:8083/suppliers')
  }

  addSupplier(supplier: Supplier) {
    return this.httpClient.post("http://localhost:8083/suppliers/", supplier)
  }
}
