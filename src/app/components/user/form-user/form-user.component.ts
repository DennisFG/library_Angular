import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user.model';

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
    // private formBuilder: FormBuilder
    private bsModalService: BsModalService,
    // private userService: UserService
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl("", [
        Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      cpf: new FormControl("", [
        Validators.required, Validators.minLength(11),
        Validators.maxLength(11), Validators.pattern('^[0-9]*$')]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]),
      // password: new FormControl('', [
      //   Validators.minLength(8),
      //   Validators.required])
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
    console.log("Form Submitted!", this.myForm.value);
    this.closeModalUserForm();
    this.users.push(this.myForm.value);
    this.userCreated.emit(this.myForm.value);

    // this.clienteService.postCliente(this.clienteForm.value).subscribe(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error)
    // });

    // this.myForm.reset();
  }
}