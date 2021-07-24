import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [{
    isbn13: '978-8532530783',
    name: 'Harry Potter e a pedra filosofal',
    author: 'J.K. Rowling',
    imgPath: '../../assets/booksImg/HP-1.jpg',
    isAvailable: true
  },{
    isbn13: '978-8532530790',
    name: 'Harry Potter e a Câmara Secreta',
    author: 'J.K. Rowling',
    imgPath: '../../assets/booksImg/HP-2.jpg',
    isAvailable: true
  },{
    isbn13: '978-8532530806',
    name: 'Harry Potter e o prisioneiro de Azkaban',
    author: 'J.K. Rowling',
    imgPath: '../../assets/booksImg/HP-3.jpg',
    isAvailable: false
  },{
    isbn13: '978-8532530813',
    name: 'Harry Potter e o cálice de fogo',
    author: 'J.K. Rowling',
    imgPath: '../../assets/booksImg/HP-4.jpg',
    isAvailable: true
  },{
    isbn13: '978-8532530837',
    name: 'Harry Potter e o enigma do príncipe',
    author: 'J.K. Rowling',
    imgPath: '../../assets/booksImg/HP-5.jpg',
    isAvailable: true
  },{
    isbn13: '978-8532530820',
    name: 'Harry Potter e a ordem da fênix',
    author: 'J.K. Rowling',
    imgPath: '../../assets/booksImg/HP-6.jpg',
    isAvailable: true
  },{
    isbn13: '978-8532530844',
    name: 'Harry Potter e as relíquias da morte',
    author: 'J.K. Rowling',
    imgPath: '../../assets/booksImg/HP-7.jpg',
    isAvailable: true
  },{
    isbn13: '978-8550804606',
    name: 'Arquitetura limpa: O guia do artesão para estrutura e design de software',
    author: 'Robert C. Martin',
    imgPath: '../../assets/booksImg/arquitetura-limpa.jpg',
    isAvailable: true
  },{
    isbn13: '978-8576086475',
    name: 'O codificador limpo: Um código de conduta para programadores profissionais',
    author: 'Bob Martin',
    imgPath: '../../assets/booksImg/codificador-limpo.jpg',
    isAvailable: true
  },{
    isbn13: '978-8550803777',
    name: 'Desenvolvimento de aplicações web com Angular',
    author: 'William Pereira Alves',
    imgPath: '../../assets/booksImg/angular.jpg',
    isAvailable: true
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
