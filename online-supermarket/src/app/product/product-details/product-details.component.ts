import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService, public _DomSanitizationService: DomSanitizer) { }
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

  }

  onDeleteProductClicked(barCode: string) {
    
  }

}