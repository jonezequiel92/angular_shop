import { Component, OnInit } from '@angular/core';

import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  product: Product = {
    id: '1',
    image: '../assets/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla',
  };
}
