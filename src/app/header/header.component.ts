import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imagePath = '/assets/img/logo5.png'

  constructor() { }

  ngOnInit(): void {
  }

}
