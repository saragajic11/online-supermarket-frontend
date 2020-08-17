import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { CategoryComponent } from './category/category.component';
import { CategoryItemComponent } from './category/category-item/category-item.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './product/filter/filter.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { SupplierComponent } from './supplier/supplier.component'
import { MatTableModule } from '@angular/material/table';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditSupplierComponent } from './supplier/edit-supplier/edit-supplier.component';
import { ProducerComponent } from './producer/producer.component';
import { AddProducerComponent } from './producer/add-producer/add-producer.component';
import { EditProducerComponent } from './producer/edit-producer/edit-producer.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './shared/delete-dialog/delete-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    CategoryComponent,
    CategoryItemComponent,
    ProductComponent,
    FilterComponent,
    ProductItemComponent,
    SupplierComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    ProducerComponent,
    AddProducerComponent,
    EditProducerComponent,
    ProductDetailsComponent,
    DropdownDirective,
    DeleteDialogComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
