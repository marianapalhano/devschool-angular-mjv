import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Array<Product> = [
    { id: 1, name: 'Yeezy 500 High', price: 1199.99 },
    { id: 2, name: 'Superstar Slip-on', price: 199.99 },
    { id: 3, name: 'NMD_R1', price: 799.99 },
    { id: 4, name: 'Courtpoint', price: 179.99 },
    { id: 5, name: 'Fluid Flow 2.0', price: 499.99 },
    { id: 6, name: 'Forum Bold', price: 599.99 },
    { id: 7, name: 'X9000L3', price: 399.99 },
    { id: 8, name: '4D Fusio', price: 1299.99 },
    { id: 9, name: 'Stan Smith', price: 279.99 },
    { id: 10, name: 'Supernova+', price: 499.99 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
