import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ProductsCard } from '../../components/products-card/products-card';
import { ProductService, Product } from '../product-detail/products.service'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer, ProductsCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }
}
