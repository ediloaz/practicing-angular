import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './models/product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'practicing-angular';
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
