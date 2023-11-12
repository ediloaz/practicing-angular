import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.models'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  // @Input() product!: Product;
  @Input() product: Product = {
    id: 0,
    price: 0,
    title: '',
    images: [],
  };
}
