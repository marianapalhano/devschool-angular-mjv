import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  faHeart = faHeart;

  @Input()
  product: Product = {
    id: 0,
    name: '',
    price: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
