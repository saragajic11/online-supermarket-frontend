import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number;
  products: Product[];
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'));
      this.productService.getProductsByCategory(this.id).subscribe(products => {
        this.products = products;
        console.log(products);
      })
    })
  }

  onAddNewProductClicked() {
    this.router.navigate(['product/new']);
  }

}
