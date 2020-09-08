import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from 'src/app/service/cart.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { UpdateAmount } from 'src/app/service/update-amount.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  constructor(public _DomSanitizationService: DomSanitizer, private cartService: CartService, private toastrService: ToastrService, private productService: ProductService) { }
  @Input()
  cartItem: Cart;
  image: any;
  totalPrice: number;
  @Output('onDeleteCartItem') onDeleteCartItem = new EventEmitter<boolean>();
  @Output('onUpdateAmount') onUpdateAmount = new EventEmitter<boolean>();

  ngOnInit(): void {
    let objectURL = 'data:image/jpeg;base64,' + this.cartItem.productDto.imageUrl;
    this.image = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
    this.totalPrice = this.cartItem.productDto.productPrice * this.cartItem.amount;
  }

  onDeleteClicked(id: number) {
    this.cartService.deleteCartItem(id).subscribe(()=> {
      this.onDeleteCartItem.emit(true);
      this.productService.increaseAmount(this.cartItem.productDto.barCode, this.cartItem.amount).subscribe(()=> {

      }, error => {
        this.toastrService.error("Error occured", "Error");
      })
    }, error=> {
      this.toastrService.error("Error while deleting item from cart", "Error");
    })
  }

  onChangeAmount(value, id: number) {
    const updateAmount = new UpdateAmount(value);
    this.cartService.updateAmount(updateAmount, id).subscribe(item=> {
      this.onUpdateAmount.emit(true);
    }, error => {
      this.toastrService.error("Error occured", "Error");
    })
  }

}
