import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [];
  
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  constructor(private http: HttpClient) { }
  private extractData(res: Response): any {
    const body = res;
    return body["items"] || { };
  }

  getBook(search,subject, order,maxResults): Observable<any>{
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${search}:${subject}&orderBy=${order}&maxResults=${maxResults}`).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}
