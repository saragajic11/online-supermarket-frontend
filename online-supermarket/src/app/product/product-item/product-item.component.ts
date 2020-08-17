import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem: Product;
  image: any;
  constructor(public _DomSanitizationService: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
    let objectURL = 'data:image/jpeg;base64,' + this.productItem.imageUrl;
    this.image = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
  }

  onViewDetailsClicked(barCode: string) {
    this.router.navigate(['product/details/' + barCode]);
  }

}
