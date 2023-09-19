// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
    private cartItems: { [key: string]: { item: any; quantity: number } } = {};

    addToCart(item: any) {
      const itemId = item.title; // You can use a unique identifier for each item
  
      if (this.cartItems[itemId]) {
        this.cartItems[itemId].quantity++;
      } else {
        this.cartItems[itemId] = { item, quantity: 1 };
      }
    }
  
    getCartItems() {
      return Object.values(this.cartItems).map((entry) => entry.item);
    }
  
    getTotalItems() {
      return Object.values(this.cartItems).reduce(
        (total, entry) => total + entry.quantity,
        0
      );
    }
}
