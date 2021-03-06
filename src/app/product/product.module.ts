import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    FormsModule,
    MaterialModule
    


  ]
})
export class ProductModule {

}
