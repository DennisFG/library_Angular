import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../usuario.model';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {
  myForm!: FormGroup;
  users: User[] = [];

   @Output() icreateUser = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.myForm = new FormGroup({
        name: new FormControl("", Validators.required),
        cpf: new FormControl("", Validators.required),
        email: new FormControl('', [ 
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*") ]),
        password: new FormControl('', [
          Validators.minLength(8), 
          Validators.required])
    });
  }

  createUser() {
      console.log("Form Submitted!", this.myForm.value);
      this.users.push(this.myForm.value);
      this.icreateUser.emit(this.myForm.value);
      this.myForm.reset();
  }
  
  onUserCreated(event: any) {
    console.log(event);
    this.users.push(event);
    this.users.forEach((user, i) => {
      user.id = i + 1;
    })
  }
  

}