import { Component, inject } from '@angular/core';

import { ProductComponent } from '../../components/product/product.component';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/product.models';

@Component({
  standalone: true,
  imports: [ CommonModule, ProductComponent ],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {
  http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit() {
     //Trigger when component is rendered
     this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        console.log(data);
        this.products = data
      });
     // This is not a promise, don't need a await.
     // Not then() is used, the suscribe() method is used to OBSERVE.
  }
}
