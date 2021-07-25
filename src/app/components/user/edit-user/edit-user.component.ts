import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() user!: User;

  myForm!: FormGroup;
  userFormBsModalRef!: BsModalRef;
  users: User[] = [];

  constructor(private bsModalService: BsModalService,
    private userService: UserService) { }


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

  editUser() {
    this.closeModalUserForm();
    this.userService
      .editUser(this.user.id, this.myForm.value.name, this.myForm.value.cpf, this.myForm.value.email, this.myForm.value.password)
      .subscribe(user => {
        alert(`${this.myForm.value.name} editado com sucesso`);
      }, error => {
        alert(`Erro, tente novamente!`)
      })
  }
}