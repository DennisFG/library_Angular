import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  usuarios: Usuario[] = [{
    id: 1,
    name: "Debora Orsolon",
    cpf: "333.333.111-30",
    email: "debora@gmail.com",
    password: '123'
  },
  {
    id: 2,
    name: "Marco Antonio",
    cpf: "111.333.111-30",
    email: "marco@gmail.com",
    password: '300400'
  },
  {
    id: 3,
    name: "Rodrigo Vargas",
    cpf: "612.321.111-30",
    email: "rodvargas@gmail.com",
    password: '9878'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
