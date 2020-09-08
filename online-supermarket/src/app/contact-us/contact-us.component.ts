import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactUsMessage } from '../model/contact-us-message.model';
import { CustomerService } from '../service/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
