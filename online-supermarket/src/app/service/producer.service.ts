import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producer } from '../model/producer.model';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private httpClient: HttpClient) { }

  getAllProducers() {
    return this.httpClient.get<Producer[]>("http://localhost:8083/producers");
  }

  addNewProducer(producer: Producer) {
    return this.httpClient.post("http://localhost:8083/producers", producer);
  }

  deleteProducer(id: number) {
    return this.httpClient.delete("http://localhost:8083/producers/" + id);
  }

  getProducerById(id: number) {
    return this.httpClient.get<Producer>("http://localhost:8083/producers/" + id);
  }

  updateProducer(id: number, producer: Producer) {
    return this.httpClient.put("http://localhost:8083/producers/" + id, producer);
  }
}
