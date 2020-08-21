import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../model/category.model';
import { SubcategoryService } from '../../service/subcategory.service';
import { Subcategory } from '../../model/subcategory.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoryService, private subcategoryService: SubcategoryService, public router: Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(categories=> {
      this.categories = categories;
    })
  }

  onCategoryClicked(id: number) {
    event.stopPropagation()
    this.router.navigate(['products/byCategory/' + id]);
  }

  onSubcategoryClicked(id: number) {
    event.stopPropagation()
    this.router.navigate(['products/bySubcategory/' + id]);
  } 

}
