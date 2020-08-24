import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { CategoryComponent } from './category/category.component';
import { CategoryItemComponent } from './category/category-item/category-item.component';
import { HttpClientModule } from '@angular/common/http';
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
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './shared/delete-dialog/delete-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { AuthComponent } from './auth/auth.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FavouriteProductComponent } from './favourite-product/favourite-product.component';
import { FavouriteProductItemComponent } from './favourite-product/favourite-product-item/favourite-product-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { AddToCartDialogComponent } from './shared/add-to-cart-dialog/add-to-cart-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'


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
    EditProductComponent,
    AuthComponent,
    ContactUsComponent,
    FavouriteProductComponent,
    FavouriteProductItemComponent,
    CartComponent,
    CartItemComponent,
    AddToCartDialogComponent
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
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
