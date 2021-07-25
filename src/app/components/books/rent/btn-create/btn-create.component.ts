import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-btn-create',
  templateUrl: './btn-create.component.html',
  styleUrls: ['./btn-create.component.css']
})
export class BtnCreateComponent implements OnInit {

  @Input() bookName: string = '';
  @Input() bookIsbn13: string = '';
  @Input() bookIsAvailable: boolean;

  rentFormBsModalRef!: BsModalRef;
  rentForm!: FormGroup;

  dateConfig: BsDatepickerConfig = new BsDatepickerConfig()

  constructor(
    private bsModalService: BsModalService,
    private rentService: RentService
  ) { }

  ngOnInit(): void {
    this.rentForm = new FormGroup({  
      date: new FormControl("", Validators.required),
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
    console.log(this.bookName);
    console.log(this.bookIsbn13);
    console.log(this.rentForm.value.cpf);
    
    const canRent = (this.rentService.getRent(this.bookIsbn13) === null);

    if (this.rentService.getRent(this.bookIsbn13) === null) {      
      this.rentService.saveRent(this.bookIsbn13, this.rentForm.value.cpf);        
      this.rentFormBsModalRef.hide();
      alert("Aluguel Registrado");
      console.log(this.rentForm);
    } else {
      alert("Livro já esta alugado!");
    }
  }

}