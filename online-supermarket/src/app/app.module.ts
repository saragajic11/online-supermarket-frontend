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
    EditSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
