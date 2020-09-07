import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FavouriteProductService } from 'src/app/service/favourite-product.service';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer.model';
import { FavouriteProduct } from 'src/app/model/favourite-product.model';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartDialogComponent } from 'src/app/shared/add-to-cart-dialog/add-to-cart-dialog.component';
import { Cart } from 'src/app/model/cart.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem: Product;
  image: any;
  isAddedToFavourites: boolean = true;
  isAddedToCart: boolean = true;
  isCustomerLoggedIn: boolean;
  customer: Customer;
  favouriteProduct: FavouriteProduct;
  constructor(public _DomSanitizationService: DomSanitizer, private router: Router, private favouriteProductService: FavouriteProductService, private customerService: CustomerService, private toastrService: ToastrService, public dialog: MatDialog, private cartService: CartService) { }

  ngOnInit(): void {
    let objectURL = 'data:image/jpeg;base64,' + this.productItem.imageUrl;
    this.image = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
    this.customerService.customer.subscribe(customer => {
      if (customer) {
        this.isCustomerLoggedIn = true;
        this.customer = customer;
        this.favouriteProductService.getByCustomerIdAndProductId(customer.id, this.productItem.barCode).subscribe(product => {
          if (product != null) {
            this.isAddedToFavourites = true;
            this.favouriteProduct = product;
          } else {
            this.isAddedToFavourites = false;
          }
        })
        this.cartService.getCartItemByCustomerAndProduct(customer.id, this.productItem.barCode).subscribe(product=> {
          if(product != null) {
            this.isAddedToCart = true;
          } else {
            this.isAddedToCart = false;
          }
        })
      } else {
        this.isCustomerLoggedIn = false;
      }
    })

  }

  onViewDetailsClicked(barCode: string) {
    this.router.navigate(['product/details/' + barCode]);
  }

  removeFromFavourites() {
    this.favouriteProductService.deleteFavouriteProduct(this.favouriteProduct.id).subscribe(() => {
      this.ngOnInit();
    }, error => {
      this.toastrService.error("Error occured", "Error");
    })
  }

  addToFavourites(barCode: string) {
    const newFavouriteProduct = new FavouriteProduct(this.customer, this.productItem);
    this.favouriteProductService.addToFavourites(newFavouriteProduct).subscribe(() => {
      this.ngOnInit();
    }, error => {
      this.toastrService.error("Error occured", "Error");
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddToCartDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onAddToCartClicked(result);
      }
    });
  }

  onAddToCartClicked(amount: number) {
    const newCartItem = new Cart(amount, this.customer, this.productItem, null);
    this.cartService.postCartItem(newCartItem).subscribe(()=> {
      this.router.navigate(['/cart']);
    }, error=> {
      this.toastrService.error("Error occured", "Error");
    })
  }

}
