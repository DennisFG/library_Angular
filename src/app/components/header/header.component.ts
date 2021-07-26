import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogged!: boolean;
  isCollapsed = true;
  constructor(
    public userService: UserService
  ) { }
  
  ngOnInit(): void {
    if (this.userService.getUser("logged")) {
      let cpf = this.userService.getUser("logged");
      this.userService
      .getByCPF(cpf)
        .subscribe((data: User) => {
          this.userLogged = data[0].isLogged;
      }, error => { 
        alert("Ocorreu um erro!");
        console.log(error);
      }); 
    }
  }

}
