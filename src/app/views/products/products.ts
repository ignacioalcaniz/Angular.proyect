import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-products',
   standalone: true,
  imports: [Header,Footer],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

}
