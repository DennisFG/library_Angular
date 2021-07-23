import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user.model';



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


}
