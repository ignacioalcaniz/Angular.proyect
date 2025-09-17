import { Injectable } from '@angular/core';
import { Product } from '../product-detail/products.service';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: CartItem[] = [];

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(product: Product) {
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;  // aumenta cantidad
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(p => p.id !== id);
  }

  clearCart() {
    this.cart = [];
  }

  getTotal(): number {
    return this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
}
