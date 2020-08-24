import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CartService } from '../service/cart.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private customerService: CustomerService) { }
  cartItems: Cart[];
  numOfItems: number;
  totalPrice: number = 0;

  ngOnInit(): void {
    this.customerService.customer.subscribe(customer=> {
      if(customer) {
        this.cartService.getCartItemsByCustomer(customer.id).subscribe(cartItems=> {
          this.totalPrice = 0;
          this.cartItems = cartItems;
          this.numOfItems = this.cartItems.length;
          this.cartItems.forEach(element => {
            this.totalPrice = this.totalPrice + (element.productDto.productPrice * element.amount);
          });
        })
      }
    })
    
  }

  onCartItemDeleted() {
    this.ngOnInit();
  }

}
