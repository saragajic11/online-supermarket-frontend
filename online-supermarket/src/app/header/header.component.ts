import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  isCustomerLoggedIn: boolean;
  isAdminLoggedIn: boolean;

  ngOnInit(): void {
    this.customerService.getLoggedInCustomer().subscribe(customer=> {
      if(customer == null) {
        this.isCustomerLoggedIn = false;
      } else {
        console.log(customer.role);
        this.isCustomerLoggedIn = true;
        if(customer.role == 'admin') {
          this.isAdminLoggedIn = true;
        } else {
          this.isAdminLoggedIn = false;
        }
      }
    })
  }


}
