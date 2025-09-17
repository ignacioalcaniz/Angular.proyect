import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../views/product-detail/products.service';
import { CartService } from '../../views/cart/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-card',
  standalone: true,
  templateUrl: './products-card.html',
  styleUrls: ['./products-card.css']
})
export class ProductsCard {
  @Input() product!: Product;

  constructor(private router: Router, private cartService: CartService) {}

  goToDetail() {
    this.router.navigate(['/products', this.product.id]);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
     const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: 'success',
      title: `${this.product.name} agregado al carrito`
    });
  }
}




 