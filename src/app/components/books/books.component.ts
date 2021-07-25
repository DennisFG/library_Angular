import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(
    public booksService: BooksService,
    private rentService: RentService
  ) { }

  ngOnInit(): void {
    this.booksService.getBook("subject", "fantasy", "relevance", 30).subscribe(data => {
      data.forEach((item) => {
        this.booksService.books.push({
          isbn13: item.id,
          name: item.volumeInfo.title,
          author: item.volumeInfo.authors[0],
          imgPath:item.volumeInfo.imageLinks.thumbnail,
          isAvailable: this.rentService.getRent(item.id) ? false : true
        })
      })
    },
    error => console.log(error))
  }
}
