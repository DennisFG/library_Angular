import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  @Input() user!: User;

  myForm!: FormGroup;
  userFormBsModalRef!: BsModalRef;


  constructor(
    private bsModalService: BsModalService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      titulo: new FormControl(),
      conteudo: new FormControl()
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

  deleteUser() {
    this.userService
      .deleteUser(this.user.id)
      .subscribe(
        data => {
          alert("Usuario deletado com sucesso")
          window.location.reload();
        }, erros => {
          alert("Não foi possivel deletar o cliente")
        })
    this.userFormBsModalRef.hide();
  }
}
