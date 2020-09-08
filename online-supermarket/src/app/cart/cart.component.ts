import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CartService } from '../service/cart.service';
import { CustomerService } from '../service/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPurchaseDialogComponent } from '../shared/confirm-purchase-dialog/confirm-purchase-dialog.component';
import { BillService } from '../service/bill.service';
import { Bill } from '../model/bill.model';
import { ToastrService } from 'ngx-toastr';
import { ConfirmPurchase } from '../model/confirm-purchase.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private customerService: CustomerService, public dialog: MatDialog, private billService: BillService, private toastrService: ToastrService) { }
  cartItems: Cart[] = [];
  numOfItems: number;
  totalPrice: number = 0;
  customerId: number;

  ngOnInit(): void {
    this.cartItems = [];
    this.customerService.customer.subscribe(customer => {
      if (customer) {
        this.customerId = customer.id;
        this.cartService.getCartItemsByCustomer(customer.id).subscribe(cartItems => {
          this.totalPrice = 0;
          console.log(cartItems);
          cartItems.forEach(element=> {
            console.log('Prolazim kroz listu');
            if(element.billDto == null) {
              this.cartItems.push(element);
              console.log('DODATO');
            }
          })
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
      data: { price: this.totalPrice }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onConfirmPurchaseClicked();
      }
    });
  }

  onConfirmPurchaseClicked() {
    const bill = new Bill(new Date(), this.totalPrice);
    this.billService.createBill(bill).subscribe(bill=> {
      const confirmPurchase = new ConfirmPurchase(this.customerId, bill.id);
      this.cartService.updateConfirmedCartItems(confirmPurchase).subscribe(()=> {
        this.ngOnInit();
      }, error => {
        this.toastrService.error("Error occured", "Error");
      })
    }, error => {
      this.toastrService.error("Error while confirming purchase", "Error");
    })
  }

}
