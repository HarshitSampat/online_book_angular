import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  @Input() book: any;
  @Output() addToCartClicked = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.book);
    this.addToCartClicked.emit();
  }
}
