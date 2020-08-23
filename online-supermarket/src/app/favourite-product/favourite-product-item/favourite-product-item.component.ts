import { Component, OnInit, Input } from '@angular/core';
import { FavouriteProduct } from 'src/app/model/favourite-product.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-favourite-product-item',
  templateUrl: './favourite-product-item.component.html',
  styleUrls: ['./favourite-product-item.component.css']
})
export class FavouriteProductItemComponent implements OnInit {

  @Input()
  favouriteProductItem: FavouriteProduct;
  image: any;
  constructor(public _DomSanitizationService: DomSanitizer) { }

  ngOnInit(): void {
    let objectURL = 'data:image/jpeg;base64,' + this.favouriteProductItem.productDto.imageUrl;
    this.image = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);

  }

}
