import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [Header,Footer],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

}
