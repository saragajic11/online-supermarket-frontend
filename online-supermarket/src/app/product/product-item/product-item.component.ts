import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  private productItem: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
