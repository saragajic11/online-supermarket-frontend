import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producer } from 'src/app/model/producer.model';
import { ProducerService } from 'src/app/service/producer.service';
import { SubcategoryService } from 'src/app/service/subcategory.service';
import { Subcategory } from 'src/app/model/subcategory.model';
import { PostProduct } from 'src/app/model/postProduct.model';
import { ProductService } from 'src/app/service/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private producerService: ProducerService, private subcategoryService: SubcategoryService, private productService: ProductService, private _location: Location) { }
  producers: Producer[];
  subcategories: Subcategory[];
  productIsOnDiscount: boolean;
  selectedFile: File;
  selectedFileSrc: any;
  selectedProducer: Producer;
  selectedSubcategory: Subcategory;

  ngOnInit(): void {
    this.producerService.getAllProducers().subscribe(producers => {
      this.producers = producers;
    })

    this.subcategoryService.getAllSubcategories().subscribe(subcategories => {
      this.subcategories = subcategories;
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.producerService.getProducerById(value.producer).subscribe(producer=> {
      this.selectedProducer = producer;
      this.subcategoryService.getSubcategoryById(value.subcategory).subscribe(subcategory=> {
        this.selectedSubcategory = subcategory;
        const newProduct = new PostProduct(value.barCode, value.name, value.description, value.price, value.amount, value.onDiscount, this.selectedProducer, this.selectedSubcategory, value.discount!= undefined ? value.discount :  null);
        const formData = new FormData();
        formData.append('file', this.selectedFile);
        this.productService.postProduct(newProduct).subscribe(product=> {
          this.productService.postProductImage(formData, newProduct.barCode).subscribe(()=> {
            this._location.back();
          })
        })
      })
    })
  }

  isOnDiscount(value: boolean) {
    this.productIsOnDiscount = value;
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
}
