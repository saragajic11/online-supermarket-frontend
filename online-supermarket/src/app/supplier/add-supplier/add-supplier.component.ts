import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Supplier } from 'src/app/model/supplier.model';
import { SupplierService } from 'src/app/service/supplier.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  constructor(private supplierService: SupplierService, private _location: Location, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newSupplier = new Supplier(value.name, value.lastName, value.contact)
    this.supplierService.addSupplier(newSupplier).subscribe(() => {
      this._location.back();
      this.toastrService.success("Supplier successfully deleted", "Success");
    }, error => {
      this.toastrService.error("Error occured while deleting supplier", "Error");
    })

  }

}
