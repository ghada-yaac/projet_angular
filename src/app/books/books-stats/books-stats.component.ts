import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-stats',
  templateUrl: './books-stats.component.html',
  styleUrl: './books-stats.component.css'
})
export class BooksStatsComponent implements OnInit {
  constructor(private bookService:BookService){}
  books?:Book[]
  
  ngOnInit(): void {
    this.books=this.bookService.getBooks();
    this.bookService.bookEdited.subscribe(
      newBooks=>this.books=newBooks
    )
  }

}
