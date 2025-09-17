
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from './cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  cart: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {
    this.loadCart();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
    this.loadCart();
     Swal.fire({
      icon: 'info',
      title: 'Producto eliminado',
      text: 'El producto fue quitado del carrito.',
      timer: 1500,
      showConfirmButton: false
    });
  }

  clear() {
    this.cartService.clearCart();
    this.loadCart();
    Swal.fire({
      icon: 'warning',
      title: 'Carrito vacío',
      text: 'Se eliminaron todos los productos.',
      timer: 1500,
      showConfirmButton: false
    });
  }

  checkout() {
    if (this.cart.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Tu carrito está vacío',
        text: 'Agregá productos antes de comprar.'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: '¡Compra realizada!',
      text: 'Gracias por tu pedido. Te enviaremos la confirmación.',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      this.clear();
    });
  }
}
