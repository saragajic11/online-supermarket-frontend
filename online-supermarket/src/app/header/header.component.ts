import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { AuthService } from '../service/auth.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private customerService: CustomerService, private authService: AuthService, private router: Router) { 
    this.setSearchSubscription();
  }
  isCustomerLoggedIn: boolean;
  isAdminLoggedIn: boolean;
  private searchSubject: Subject<string> = new Subject();

  ngOnInit(): void {
    this.customerService.getLoggedInCustomer().subscribe(customer=> {
      if(customer == null) {
        this.isCustomerLoggedIn = false;
        this.isAdminLoggedIn = false;
      } else {
        this.isCustomerLoggedIn = true;
        if(customer.role == 'admin') {
          this.isAdminLoggedIn = true;
        } else {
          this.isAdminLoggedIn = false;
        }
      }
    })
  }

  onLogoutClicked() {
    this.authService.logout();
  }

  updateSearch(searchTextValue: string) {
    this.searchSubject.next(searchTextValue);
  }

  setSearchSubscription() {
    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.router.navigate(['/search-product/' + searchValue]);
    });
  }
}
