import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bill } from '../model/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private httpClient: HttpClient) { }

  createBill(bill: Bill) {
    const token = localStorage.getItem('token');
    return this.httpClient.post<Bill>("http://localhost:8083/bills", bill, { headers: new HttpHeaders().set('Authorization', token)});
  }
}
