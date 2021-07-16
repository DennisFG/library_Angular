import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {
  myForm: FormGroup;

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

  onSubmit() {
      console.log("Form Submitted!", this.myForm.value);
      this.myForm.reset();
    
  }
  

}
