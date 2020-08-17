import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService, public _DomSanitizationService: DomSanitizer, public dialog: MatDialog, private _location: Location, private toastrService: ToastrService, private router: Router) { }
  barCode: string;
  product: Product;
  image: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.barCode = params.get('id');
      if (this.barCode != null) {
        this.productService.getProductByBarCode(this.barCode).subscribe(product => {
          this.product = product;
          let objectURL = 'data:image/jpeg;base64,' + this.product.imageUrl;
          this.image = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
        })
      }
    })
  }

  onEditProductClicked(barCode: string) {
    this.router.navigate(['product/edit/' + barCode]);
  }

  onDeleteProductClicked(barCode: string) {
    this.productService.deleteProduct(barCode).subscribe(() => {
      this._location.back();
      this.toastrService.success("Product " + barCode + " successfully deleted", "Success");
    }, error => {
      this.toastrService.error("Error while deleting product " + barCode);
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDeleteProductClicked(this.barCode);
      }
    });
  }

}
