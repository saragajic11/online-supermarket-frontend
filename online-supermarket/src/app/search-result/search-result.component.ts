import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  searchQuery: string;
  products: Product[];
  emptyList: boolean;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.searchQuery = params.get('search');
      if (this.searchQuery != null) {
        this.productService.searchProduct(this.searchQuery).subscribe(products => {
          this.products = products
          if (this.products.length == 0) {
            this.emptyList = true;
          } else {
            this.emptyList = false
          }
        }

        );
      } else {
        this.emptyList = true;
      }
    })
  }

}
