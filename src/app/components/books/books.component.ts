import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(
    public booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.booksService.getBook("subject", "fantasy", "relevance", 30).subscribe(data => {
      data.forEach((item) => {
        this.booksService.books.push({
          isbn13: item.id,
          name: item.volumeInfo.title,
          author: item.volumeInfo.authors[0],
          imgPath:item.volumeInfo.imageLinks.thumbnail,
          isAvailable: true
        })
      })
    },
    error => console.log(error))
  }
}
