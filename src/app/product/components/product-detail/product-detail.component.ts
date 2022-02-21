import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.fetchProduct(id);
      //this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
      console.log(product);
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      image: 'assets/banner-1.jpg',
      title: 'nuevo desde angular',
      price: 3000,
      description: 'Es una descripción - nuevo producto'
    };
    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        this.product = product;
        console.log(product)
    })
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 555,
      description: 'edicion titulo'
    };

    this.productsService.updateProduct('2', updateProduct).subscribe(product => {
      console.log(product)
    })
  }

  deleteProduct() {
    this.productsService.deleteProduct('222').subscribe(rta => {
      console.log(rta)
    })
  }
}
