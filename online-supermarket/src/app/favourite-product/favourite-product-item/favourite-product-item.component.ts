import { Component, OnInit, Input } from '@angular/core';
import { FavouriteProduct } from 'src/app/model/favourite-product.model';
import { DomSanitizer } from '@angular/platform-browser';
import { FavouriteProductService } from 'src/app/service/favourite-product.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favourite-product-item',
  templateUrl: './favourite-product-item.component.html',
  styleUrls: ['./favourite-product-item.component.css']
})
export class FavouriteProductItemComponent implements OnInit {

  @Input()
  favouriteProductItem: FavouriteProduct;
  image: any;
  constructor(public _DomSanitizationService: DomSanitizer, private favouriteProductService: FavouriteProductService, private _location: Location, private toastrService: ToastrService) { }

  ngOnInit(): void {
    let objectURL = 'data:image/jpeg;base64,' + this.favouriteProductItem.productDto.imageUrl;
    this.image = this._DomSanitizationService.bypassSecurityTrustUrl(objectURL);
  }

  onRemoveClicked(id: number) {
    this.favouriteProductService.deleteFavouriteProduct(id).subscribe(()=> {
      this._location.back();
    }, error=> {
      this.toastrService.error("Error while removing item from favourites", "Error");
    })
  }

}
