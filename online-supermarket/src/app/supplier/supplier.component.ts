import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Supplier } from '../model/supplier.model';
import { SupplierService } from '../service/supplier.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(private supplierService: SupplierService, private router: Router, private toastrService: ToastrService) { }

  dataSource = new MatTableDataSource<Supplier>();

  displayedColumns: string[] = ['supplierName', 'supplierLastname', 'supplierContact', 'edit', 'delete'];

  ngOnInit(): void {
    this.supplierService.getAllSuppliers().subscribe(suppliers => {
      console.log(suppliers);
      this.dataSource.data = suppliers;
    })
  }

  onAddNewSupplier() {
    this.router.navigate(['suppliers/new'])
  }

  onDeleteSupplierClicked(id: number) {
    this.supplierService.deleteSupplier(id).subscribe(() => {
      this.toastrService.success("Supplier successfully deleted", "Success");
      this.ngOnInit();
    }, error => {
      this.toastrService.error("Error occured while deleting supplier", "Error");
    })
  }

  onEditSupplierClicked(id: number) {
    this.router.navigate(['suppliers/edit/' + id])
  }

}
