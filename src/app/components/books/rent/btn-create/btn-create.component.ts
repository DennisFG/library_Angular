import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-btn-create',
  templateUrl: './btn-create.component.html',
  styleUrls: ['./btn-create.component.css']
})
export class BtnCreateComponent implements OnInit {

  @Input() bookName: string = '';
  aluguelFormBsModalRef!: BsModalRef;
  aluguelForm!: FormGroup;

  dateConfig: BsDatepickerConfig = new BsDatepickerConfig()
  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.aluguelForm = new FormGroup({  
      date: new FormControl(),
      name: new FormControl(),
    })
    this.dateConfig.containerClass = 'theme-dark-blue';
  }
  
  openAluguelFormModal(template: TemplateRef<any>) {
    this.aluguelFormBsModalRef = this.bsModalService.show(template), {
      class: "modal-sl-dialog-centered",
      ignoreBackdropClick: true
    }      
  }

  closeAluguelFormModal(): void{
    this.aluguelFormBsModalRef.hide();
  }

  createAluguel() {
    this.aluguelFormBsModalRef.hide();
    console.log(this.aluguelForm)
  }

}