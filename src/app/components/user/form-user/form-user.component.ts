import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  myForm!: FormGroup;
  userFormBsModalRef!: BsModalRef;
  users: User[] = [];

  @Output() userCreated = new EventEmitter<any>();

  constructor(
    private bsModalService: BsModalService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40)]),
      cpf: new FormControl("", [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern('^[0-9]*$')]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required])
    });
  }

  openUserFormModal(template: TemplateRef<any>) {
    this.userFormBsModalRef = this.bsModalService.show(template, {
      class: 'modal-sl modal-dialog-centered',
      ignoreBackdropClick: true
    })
    this.myForm.reset();
  }

  closeModalUserForm(): void {
    this.userFormBsModalRef.hide();
  }

  createUser() {
    this.myForm.value.isLogged = false;
    console.log("Form Submitted!", this.myForm.value);
    this.users.push(this.myForm.value);
    this.userCreated.emit(this.myForm.value);
    this.userService
      .postUser(this.myForm.value)
      .subscribe(
        data => {
          console.log(data);
        }, error => {
          console.log(error)
        }
      );
    this.userFormBsModalRef.hide();
  }

  onUserCreated(event: any) {
    console.log(event);
    this.users.push(event);
    this.users.forEach((user, i) => {
      user.id = i + 1;
    })
  }

}

