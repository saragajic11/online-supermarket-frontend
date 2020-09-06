import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/service/category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private _location: Location) { }
  selectedFile: File;
  selectedFileSrc: any;

  ngOnInit(): void {
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
    const newCategory = new Category(value.name);
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.categoryService.postCategory(newCategory).subscribe(category => {
      this.categoryService.postCategoryImage(formData, category.id).subscribe(()=> {
        this._location.back();
      })
    })
  }
}
