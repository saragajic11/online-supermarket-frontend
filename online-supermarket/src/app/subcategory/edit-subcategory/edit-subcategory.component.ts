import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';
import { SubcategoryService } from 'src/app/service/subcategory.service';
import { Category } from 'src/app/model/category.model';
import { ActivatedRoute } from '@angular/router';
import { Subcategory } from 'src/app/model/subcategory.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.css']
})
export class EditSubcategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private subcategoryService: SubcategoryService, private _location: Location, private toastrService: ToastrService, private route: ActivatedRoute) { }
  categories: Category[];
  id: number;
  subcategory: Subcategory;
  @ViewChild('editSubcategoryForm', { static: false }) form: NgForm

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    })
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      return this.subcategoryService.getSubcategoryById(this.id).subscribe(subcategory=> {
        this.subcategory = subcategory;
        this.form.setValue({
          name: this.subcategory.name,
          category: this.subcategory.categoryDto.id
        })
      })
    })

  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.categoryService.getCategoryById(value.category).subscribe(category=> {
      console.log(category);
      const updatedSubcategory = new Subcategory(value.name, category);
      this.subcategoryService.updateSubcategory(updatedSubcategory, this.id).subscribe(()=> {
        this.toastrService.success("Successfully updated subcategory", "Success");
        this._location.back();
      }, error=> {
        this.toastrService.error("Error while updating subcategory", "Error");
      })
    })
    
  }

}
