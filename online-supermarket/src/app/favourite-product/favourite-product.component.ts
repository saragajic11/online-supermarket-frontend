import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer.model';
import { FavouriteProduct } from '../model/favourite-product.model';
import { FavouriteProductService } from '../service/favourite-product.service';

@Component({
  selector: 'app-favourite-product',
  templateUrl: './favourite-product.component.html',
  styleUrls: ['./favourite-product.component.css']
})
export class FavouriteProductComponent implements OnInit {

  constructor(private customerService: CustomerService, private favouriteProductService: FavouriteProductService) { }
  loggedCustomer: Customer;
  listOfFavouriteProducts: FavouriteProduct[];

  ngOnInit(): void {
    console.log('CAO');
    this.customerService.customer.subscribe(customer => {
      if(customer) {
        this.loggedCustomer = customer;
        this.favouriteProductService.getFavouriteProductsByCustomerId(customer.id).subscribe(products=> {
          this.listOfFavouriteProducts = products;
        })
      }
    })
  }

}
