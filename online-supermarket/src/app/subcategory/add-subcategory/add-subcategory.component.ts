import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { SubcategoryService } from 'src/app/service/subcategory.service';
import { Category } from 'src/app/model/category.model';
import { NgForm } from '@angular/forms';
import { Subcategory } from 'src/app/model/subcategory.model';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private subcategoryService: SubcategoryService, private _location: Location, private toastrService: ToastrService) { }

  categories: Category[];

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(categories=> {
      this.categories = categories;
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.categoryService.getCategoryById(value.category).subscribe(category=> {
      const newSubcategory = new Subcategory(value.name, category);
      this.subcategoryService.postSubcategory(newSubcategory).subscribe(()=> {
        this._location.back();
        this.toastrService.success("Successfully added subcategory", "Success");
      }, error => {
        this.toastrService.error("Error while adding subcategory", "Error");
      })
    })
    
  }
}
