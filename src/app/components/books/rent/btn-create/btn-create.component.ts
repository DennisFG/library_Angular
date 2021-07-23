import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-btn-create',
  templateUrl: './btn-create.component.html',
  styleUrls: ['./btn-create.component.css']
})
export class BtnCreateComponent implements OnInit {

  @Input() bookName: string = '';
  rentFormBsModalRef!: BsModalRef;
  rentForm!: FormGroup;

  dateConfig: BsDatepickerConfig = new BsDatepickerConfig()
  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.rentForm = new FormGroup({  
      date: new FormControl(),
      cpf: new FormControl("", [
        Validators.required, Validators.minLength(11), 
        Validators.maxLength(11), Validators.pattern('^[0-9]*$')]),
      name: new FormControl("", [
        Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
    })
    this.dateConfig.containerClass = 'theme-dark-blue';
  }
  
  openRentFormModal(template: TemplateRef<any>) {
    this.rentFormBsModalRef = this.bsModalService.show(template), {
      class: "modal-sl-dialog-centered",
      ignoreBackdropClick: true
    }      
  }

  closeRentFormModal(): void {    
    this.rentFormBsModalRef.hide();    
  }

  createRent() {
    this.rentFormBsModalRef.hide();
    console.log(this.rentForm);
  }

}