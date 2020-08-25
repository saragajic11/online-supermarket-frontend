import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { CategoryService } from '../service/category.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number;
  products: Product[];
  isAdminLoggedIn: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'));
      if (this.router.url.includes('/byCategory')) {
        this.productService.getProductsByCategory(this.id).subscribe(products => {
          this.products = products;
        })
      } else if (this.router.url.includes('/bySubcategory')) {
        console.log("CAO 2");
        this.productService.getProductsBySubcategory(this.id).subscribe(products => {
          this.products = products;
          console.log(products);
        })
      }
    })

    this.customerService.customer.subscribe(customer=> {
      if(customer != null) {
        if(customer.role == 'admin') {
          this.isAdminLoggedIn = true;
        } else {
          this.isAdminLoggedIn = false;
        }
      } else {
        this.isAdminLoggedIn = false;
      }
    })

  }

  onAddNewProductClicked() {
    this.router.navigate(['product/new']);
  }

}
