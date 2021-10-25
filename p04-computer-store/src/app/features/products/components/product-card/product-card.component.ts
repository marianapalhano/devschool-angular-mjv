import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product?: Product;


  constructor() { }

  ngOnInit(): void {
  }

  getInstallment(price?: number) {
    return price ? price/10 : price;
  }

  getBankSlip(price?: number) {
    return price ? price*0.95 : price;
  }

  addToCart() {
    const notification = document.querySelector('.notification');
    notification?.classList.toggle('disabled');
    console.log(notification)
  }

}
