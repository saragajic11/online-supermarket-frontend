import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../model/category.model';
import { SubcategoryService } from '../../service/subcategory.service';
import { Subcategory } from '../../model/subcategory.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoryService, private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(categories=> {
      this.categories = categories;
      console.log(categories);
    })
  }

}
