import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmEmailService {

  constructor(private httpClient: HttpClient) { }

  confirmEmail(confirmationToken: string) {
    return this.httpClient.get("http://localhost:8083/customers/confirm-account?token=" + confirmationToken);
  }
}
