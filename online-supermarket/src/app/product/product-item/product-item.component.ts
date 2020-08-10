import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem: Product;
  image: any;
  constructor(public _DomSanitizationService: DomSanitizer) { }

  ngOnInit(): void {
    let objectURL = 'data:image/jpeg;base64,' + this.productItem.imageUrl;
    console.log(this.productItem.imageUrl);
    this.image = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
    console.log(this.image);
  }

}
