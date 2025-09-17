import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;  
  price: number;
  image: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Camisa gaucha',
      price: 25000,
      image: 'https://i.ibb.co/Vp970hv7/OIP.jpg',
      description: 'Camisa tradicional gaucha, confeccionada en algodón resistente.'
    },
    {
      id: 2,
      name: 'Bota de campo',
      price: 45000,
      image: 'https://i.ibb.co/gFhJkLwG/OIP-1.jpg',
      description: 'Botas de cuero hechas a mano, resistentes y cómodas para el campo.'
    },
    {
      id: 3,
      name: 'Poncho criollo',
      price: 60000,
      image: 'https://i.ibb.co/G3NZL7Kz/PONCHO-CRIOLLO.jpg',
      description: 'Poncho tejido artesanalmente, típico de la tradición criolla.'
    },
    {
      id: 4,
      name: 'Faja pampa',
      price: 15000,
      image: 'https://i.ibb.co/KcK71Vzp/30096-P-scaled-1.jpg',
      description: 'Faja pampa de lana, ideal para completar la vestimenta gaucha.'
    }
  
  ];

  getAll(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
