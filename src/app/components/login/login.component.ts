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
        item.isLogged = true;
        this.userService.saveUser("logged", item.cpf)
        this.userService
      .updateUser(item)
      .subscribe(
        data => {
          console.log(data);
        }, error => {
          console.log(error)
        }
      );
      }
    }
    userName.value = "";
    password.value = "";
    if (userExist) {
      window.location.reload();
      alert("Usuário Logado!");
    } else {
      alert("Usuário ou senha incorretos!")
    }
    this.router.navigate(['/']);
  }
}
