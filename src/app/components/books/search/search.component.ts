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
      data.forEach((item) => {
        this.booksService.booksSearch.push({
          isbn13: item?.id,
          name: item?.volumeInfo?.title,
          author: item?.volumeInfo?.authors ? item?.volumeInfo?.authors[0] : null,
          imgPath: item?.volumeInfo?.imageLinks?.thumbnail,
          isAvailable: true
        })
      })   
    },
    error => alert("Erro!"))
    
    this.bookBsModalRef = this.bsModalService.show(template, {
      class: 'modal-sl modal-dialog-centered'
    })
  }
  
  closeModal(): void {
    this.bookBsModalRef.hide();
  }
}
