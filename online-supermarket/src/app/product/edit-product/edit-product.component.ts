import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product.model';
import { ProducerService } from 'src/app/service/producer.service';
import { SubcategoryService } from 'src/app/service/subcategory.service';
import { Producer } from 'src/app/model/producer.model';
import { Subcategory } from 'src/app/model/subcategory.model';
import { PostProduct } from 'src/app/model/postProduct.model';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService, private producerService: ProducerService, private subcategoryService: SubcategoryService, private _location: Location, private toastrService: ToastrService) { }

  barCode: string;
  product: Product;
  productIsOnDiscount: boolean;
  selectedFile: File;
  producers: Producer[];
  subcategories: Subcategory[];
  selectedFileSrc: string;
  base64Data: any;
  retrievedImage: any;
  selectedProducer: Producer;
  selectedSubcategory: Subcategory;
  @ViewChild('editProductForm', { static: false }) form: NgForm

  ngOnInit(): void {
    this.route.paramMap.subscribe(parmas => {
      this.barCode = parmas.get('id');
      this.productService.getProductByBarCode(this.barCode).subscribe(product => {
        this.product = product;
        this.base64Data = this.product.imageUrl;
        this.selectedFileSrc = 'data:image/jpeg;base64,' + this.base64Data;
        if (this.product.isOnDiscount) {
          this.productIsOnDiscount = true;
          this.form.setValue({
            barCode: this.product.barCode,
            name: this.product.productName,
            description: this.product.productDescription,
            price: this.product.productPrice,
            amount: this.product.amount,
            onDiscount: this.product.isOnDiscount,
            discount: this.product.discount,
            producer: this.product.producerDto.id,
            subcategory: this.product.subcategoryDto.id
          })
        } else {
          this.productIsOnDiscount = false;
          this.form.setValue({
            barCode: this.product.barCode,
            name: this.product.productName,
            description: this.product.productDescription,
            price: this.product.productPrice,
            amount: this.product.amount,
            onDiscount: this.product.isOnDiscount,
            producer: this.product.producerDto.id,
            subcategory: this.product.subcategoryDto.id
          })
        }

      })
    })

    this.producerService.getAllProducers().subscribe(producers => {
      this.producers = producers;
    })
    this.subcategoryService.getAllSubcategories().subscribe(subcategories => {
      this.subcategories = subcategories;
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.producerService.getProducerById(value.producer).subscribe(producer => {
      this.selectedProducer = producer;
      this.subcategoryService.getSubcategoryById(value.subcategory).subscribe(subcategory => {
        this.selectedSubcategory = subcategory;
        const updatedProduct = new PostProduct(this.barCode, value.name, value.description, value.price, value.amount, value.onDiscount, this.selectedProducer, this.selectedSubcategory, value.discount != undefined ? value.discount : null)
        this.productService.updateProduct(this.barCode, updatedProduct).subscribe(() => {
          if (this.selectedFile != undefined) {
            const formData = new FormData();
            formData.append('file', this.selectedFile);
            this.productService.postProductImage(formData, updatedProduct.barCode).subscribe(() => {
              this._location.back();
              this.toastrService.success("Successfully updated product " + this.barCode, "Success");
            }, error => {
              this.toastrService.error("Error while uploading photo", "Error");
            })
          } else {
            this._location.back();
            this.toastrService.success("Successfully updated product " + this.barCode, "Success");
          }
        }, error=> {
          this.toastrService.error("Error while updating product " + this.barCode, "Error");
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

  isOnDiscount(value: boolean) {
    this.productIsOnDiscount = value;
  }

}
