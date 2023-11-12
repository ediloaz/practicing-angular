import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: 'contact',
    title: 'Contact - Title for SEO',
    component: ContactComponent
  },
  {
    path: 'products',
    title: 'Products - Title for SEO',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
