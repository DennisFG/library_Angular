import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  bookBsModalRef!: BsModalRef;
  constructor(
    private bsModalService: BsModalService,
    public booksService: BooksService
  ) { }

  ngOnInit(): void {

  }

  searchBook(input, template: TemplateRef<any>) {
    let inputSearch = input.value.replace(" ", "+");
    input.value = "";
    this.booksService.getSearchBook(inputSearch, "relevance").subscribe(data => {
      if (Object.entries(data).length > 0) {
        data.forEach((item) => {
          this.booksService.books.push({
            isbn13: item?.id,
            name: item?.volumeInfo?.title,
            author: item?.volumeInfo?.authors ? item?.volumeInfo?.authors[0] : null,
            imgPath: item?.volumeInfo?.imageLinks?.thumbnail,
            isAvailable: true
          })
        })
      this.bookBsModalRef = this.bsModalService.show(template, {
      class: 'modal-sl modal-dialog-centered'
      })} else {
        alert("Não encontrei este livro. Procure por outro!")
      }
    },
    error => alert("Erro!"))
    this.booksService.books = [];    
  }
  
  closeModal(): void {
    this.bookBsModalRef.hide();
  }
}
