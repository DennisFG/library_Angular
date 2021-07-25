import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor() { }

  saveRent (isbn13: string, cpf: string) {
    localStorage.setItem(isbn13, cpf);
  }

  getRent (isbn13: string) {
    return localStorage.getItem(isbn13);
  }

  removeRent(isbn13: string) {
    localStorage.removeItem(isbn13);
  }
}
