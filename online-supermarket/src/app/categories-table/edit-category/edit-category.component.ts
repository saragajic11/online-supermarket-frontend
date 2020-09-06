import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category.model';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private _location: Location, private toastrService: ToastrService) { }
  id: number;
  category: Category;
  selectedFileSrc: string;
  base64Data: any;
  selectedFile: File;
  @ViewChild('editCategoryForm', { static: false }) form: NgForm;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.categoryService.getCategoryById(this.id).subscribe(category => {
        this.category = category;
        this.base64Data = this.category.categoryImage;
        this.selectedFileSrc = 'data:image/jpeg;base64,' + this.base64Data;
        this.form.setValue({
          name: this.category.categoryName
        })
      })
    })
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = file;
      this.selectedFileSrc = event.target.result;
    });

    reader.readAsDataURL(file);
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const updatedCategory = new Category(value.name);
    this.categoryService.updateCategory(this.id, updatedCategory).subscribe(() => {
      if (this.selectedFile != undefined) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);
        this.categoryService.postCategoryImage(formData, this.id).subscribe(() => {
          this._location.back();
          this.toastrService.success("Successfully updated category", "Success");
        }, error => {
          this.toastrService.error("Error while uploading photo", "Error");
        })
      } else {
        this._location.back();
        this.toastrService.success("Successfully updated category", "Success");
      }
    }, error=> {
      this.toastrService.error("Error while updating category", "Error");
    })
  }
}
