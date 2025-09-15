import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Products } from './views/products/products';
import { Cart } from './views/cart/cart';

export const routes: Routes = [
{
    path: '',
    component: Home

},
{
    path: 'products',
    component: Products

},
{
    path: 'cart',
    component: Cart

}    


];
