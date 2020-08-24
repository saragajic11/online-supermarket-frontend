import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './supplier/edit-supplier/edit-supplier.component';
import { ProducerComponent } from './producer/producer.component';
import { AddProducerComponent } from './producer/add-producer/add-producer.component';
import { EditProducerComponent } from './producer/edit-producer/edit-producer.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { AuthComponent } from './auth/auth.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FavouriteProduct } from './model/favourite-product.model';
import { FavouriteProductComponent } from './favourite-product/favourite-product.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CategoryComponent },
  { path: 'products/byCategory/:id', component: ProductComponent },
  { path: 'products/bySubcategory/:id', component: ProductComponent },
  { path: 'product/details/:id', component: ProductDetailsComponent },
  { path: 'suppliers', component: SupplierComponent },
  { path: 'suppliers/new', component: AddSupplierComponent },
  { path: 'suppliers/edit/:id', component: EditSupplierComponent },
  { path: 'producers', component: ProducerComponent },
  { path: 'producers/new', component: AddProducerComponent },
  { path: 'producers/edit/:id', component: EditProducerComponent },
  { path: 'product/new', component: AddProductComponent },
  { path: 'product/edit/:id', component: EditProductComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'favourites', component: FavouriteProductComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
