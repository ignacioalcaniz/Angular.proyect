import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { ProductDetail } from './views/product-detail/product-detail';
import { Cart } from './views/cart/cart';
import { Contact } from './views/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },                     
  { path: 'products/:id', component: ProductDetail }, 
  { path: 'cart', component: Cart },                  
  { path: 'contact', component:  Contact }         
];