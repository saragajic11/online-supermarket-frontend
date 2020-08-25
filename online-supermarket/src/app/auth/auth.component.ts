import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, public toastrService: ToastrService, public router: Router, private customerService: CustomerService) { }

  isLoginMode = true;
  displaySentMailMessage: boolean = false;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if (this.isLoginMode) {
      this.authService.login(value.username, value.password).subscribe(response => {
        localStorage.setItem('token', 'Bearer ' + response.token);
        this.customerService.getCustomerByToken().subscribe(customer => {
          this.customerService.emitCustomer(customer);
          this.toastrService.success("Successfully logged in", "Success");
          this.router.navigate(['home']);
        })
      }, error => {
        this.toastrService.error(error.error, "Error");
      })
    } else {
      const newCustomer = new Customer(value.username, value.name, value.lastName, value.email, value.password, value.age, value.country, value.city, value.street, 'user');
      this.authService.register(newCustomer).subscribe(()=> {
        this.onSwitchMode();
        this.displaySentMailMessage = true;
      }, error => {
        this.toastrService.error("Customer with provided email already exists", "Error");
      })
    }
  }

}
