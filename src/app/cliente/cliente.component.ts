import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [{
    id: 1,
    nome: "Debora Orsolon",
    cpf: "333.333.111-30",
    email: "debora@gmail.com",
    senha: '123'
  },
  {
    id: 2,
    nome: "Marco Antonio",
    cpf: "111.333.111-30",
    email: "marco@gmail.com",
    senha: '300400'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
