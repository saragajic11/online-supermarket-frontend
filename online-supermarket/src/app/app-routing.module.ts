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


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CategoryComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'product/details/:id', component: ProductDetailsComponent },
  { path: 'suppliers', component: SupplierComponent },
  { path: 'suppliers/new', component: AddSupplierComponent },
  { path: 'suppliers/edit/:id', component: EditSupplierComponent },
  { path: 'producers', component: ProducerComponent },
  { path: 'producers/new', component: AddProducerComponent },
  { path: 'producers/edit/:id', component: EditProducerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
