import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SupplierService } from 'src/app/service/supplier.service';
import { Supplier } from 'src/app/model/supplier.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  constructor(private route: ActivatedRoute, private supplierService: SupplierService, private toastrService: ToastrService, private _location: Location) { }
  supplierId: number;
  supplier: Supplier;
  @ViewChild('supplierForm', { static: false }) form: NgForm

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.supplierId = params.id
      this.supplierService.getSupplierById(this.supplierId).subscribe(supplier => {
        this.supplier = supplier;
        this.form.setValue({
          name: this.supplier.supplierName,
          lastName: this.supplier.supplierLastname,
          contact: this.supplier.contact
        })
      })
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const editedSupplier = new Supplier(value.name, value.lastName, value.contact);
    this.supplierService.editSupplier(editedSupplier, this.supplierId).subscribe(() => {
      this.toastrService.success("Supplier successfully updated", "Success");
      this._location.back();
    }, error => {
      this.toastrService.error("Error while editing supplier", "Error");
    })
  }
}
