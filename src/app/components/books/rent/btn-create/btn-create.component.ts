import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user.model';
import { RentService } from 'src/app/services/rent.service';
import { UserService } from 'src/app/services/user.service';

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
    private rentService: RentService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.rentForm = new FormGroup({  
      date: new FormControl("", Validators.required),
      cpf: new FormControl("", [
        Validators.required, Validators.minLength(11), 
        Validators.maxLength(11), Validators.pattern('^[0-9]*$')]),
    })
    this.dateConfig.containerClass = 'theme-dark-blue';

    this.userService
      .getAll()
      .subscribe((data: User[]) => {        
        this.userService.users = data;
      }, error => { 
        alert("Ocorreu um erro!");
        console.log(error);
      }); 
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
    let cpfExist: boolean = false;       

    for (let item of this.userService.users) {
      if (item.cpf === this.rentForm.value.cpf) {
        cpfExist = true;
      }
    }
    
    if (cpfExist) {
      if (this.rentService.getRent(this.bookIsbn13) === null) {
        this.rentService.saveRent(this.bookIsbn13, this.rentForm.value.cpf);        
        this.rentFormBsModalRef.hide();
        window.location.reload();
        alert("Aluguel Registrado");        
      } else {
        alert("Livro já esta alugado!");
      }
    } else {
      alert("CPF não cadastrado!")
    }
  }
}