import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService
      .getAll()
      .subscribe((data: User[]) => {        
        this.userService.users = data;
      }, error => { 
        alert("Ocorreu um erro!");
        console.log(error);
      }); 
  }

  login(userName, password) {
    let userExist: boolean = false;       

    for (let item of this.userService.users) {
      if (item.email === userName.value && item.password === password.value) {
        userExist = true;
      }
    }
    userName.value = "";
    password.value = "";
    if (userExist) {
      alert("Usuário Logado!");
      this.userService.isLogged = true;
      this.router.navigate(['/']);
    } else {
      alert("Usuário ou senha incorretos!")
      this.userService.isLogged = false;
    }
  }
}
