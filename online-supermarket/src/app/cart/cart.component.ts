import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CartService } from '../service/cart.service';
import { CustomerService } from '../service/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPurchaseDialogComponent } from '../shared/confirm-purchase-dialog/confirm-purchase-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private customerService: CustomerService, public dialog: MatDialog) { }
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

  onUpdateAmount() {
    this.ngOnInit();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmPurchaseDialogComponent, {
      width: '250px',
      data: { price: this.totalPrice}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onConfirmPurchaseClicked();
      }
    });
  }

  onConfirmPurchaseClicked() {

  }

}
