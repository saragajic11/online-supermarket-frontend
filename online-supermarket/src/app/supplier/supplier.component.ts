import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Supplier } from '../model/supplier.model';
import { SupplierService } from '../service/supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(private supplierService: SupplierService, private router: Router) { }

  dataSource = new MatTableDataSource<Supplier>();

  displayedColumns: string[] = ['supplierName', 'supplierLastname', 'supplierContact', 'edit', 'delete'];

  ngOnInit(): void {
    this.supplierService.getAllSuppliers().subscribe(suppliers=> {
      this.dataSource.data = suppliers;
    })
  }

  onAddNewSupplier() {
    this.router.navigate(['add-supplier'])
  }

}
