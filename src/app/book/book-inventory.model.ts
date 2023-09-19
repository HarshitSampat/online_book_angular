import { Book } from './book.model';

export interface BookInventory {
  getBooks(): Book[];
  getBookByTitle(title: string): Book | undefined;
  placeOrder(title: string, quantity: number): boolean;
}