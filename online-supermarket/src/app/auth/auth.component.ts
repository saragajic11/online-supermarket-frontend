import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, public toastrService: ToastrService, public router: Router) { }

  isLoginMode = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if(this.isLoginMode) {
      this.authService.login(value.username, value.password).subscribe(response=> {
        localStorage.setItem('token', 'Bearer ' + response.token);
        this.toastrService.success("Successfully logged in", "Success");
        this.router.navigate(['home']);
      }, error=> {
        this.toastrService.error("Wrong user credentials", "Error");
      })
    }
  }

}
