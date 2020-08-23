import { Component } from '@angular/core';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-supermarket';

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomerByToken().subscribe(customer => {
      this.customerService.emitCustomer(customer);
    });
  }
}

