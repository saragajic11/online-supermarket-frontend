import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producer } from '../model/producer.model';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private httpClient: HttpClient) { }

  getAllProducers() {
    const token = localStorage.getItem('token');
    return this.httpClient.get<Producer[]>("http://localhost:8083/producers", {headers: new HttpHeaders().set('Authorization', token)});
  }

  addNewProducer(producer: Producer) {
    const token = localStorage.getItem('token');
    return this.httpClient.post("http://localhost:8083/producers", producer, {headers: new HttpHeaders().set('Authorization', token)});
  }

  deleteProducer(id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.delete("http://localhost:8083/producers/" + id, {headers: new HttpHeaders().set('Authorization', token)});
  }

  getProducerById(id: number) {
    const token = localStorage.getItem('token');
    return this.httpClient.get<Producer>("http://localhost:8083/producers/" + id, {headers: new HttpHeaders().set('Authorization', token)});
  }

  updateProducer(id: number, producer: Producer) {
    const token = localStorage.getItem('token');
    return this.httpClient.put("http://localhost:8083/producers/" + id, producer, {headers: new HttpHeaders().set('Authorization', token)});
  }
}
