import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data: User[])=>{
      console.log(data);
      this.userService.users = data;
    }, error => {alert("Ocorreu um erro!")});
  }

  onUserCreated(event: any) {
    this.userService.users.push(event);
    this.userService.users.forEach((user, i) => {
      user.id = i + 1;
    })
   
  }

}
