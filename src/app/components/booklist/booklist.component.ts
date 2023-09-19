import { Component, OnInit } from '@angular/core';
import { Book } from '../../book/book.model';
// import { BookstoreInventoryService } from '../../services/bookstore-inventory.service';
import { BookService } from '../../services/book.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {
  books: any[] = [];
  cartItems: { item: any; quantity: number }[] = [];
  constructor(
    private bookService: BookService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data.books;
    });
  }
  updateCartItems() {
    this.cartItems = Object.values(this.cartService.getCartItems());
    console.log(this.cartItems);
  }
  getTitle(Item: any) {
    console.log(Item);

    return Item.title;
  }
  getQuty(Item: any) {
    return Item.quantity;
  }
}
