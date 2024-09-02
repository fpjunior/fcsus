import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrl: './lista-paciente.component.scss'
})
export class ListaPacienteComponent {
  usuarios = [
    {usuario: "João da Silva", cpf:"123.456.789-90", dtnasnimento: "01/01/2000", nSUS:"12345678"},
    {usuario: "Marcos Ferreira", cpf:"456.123.789-90", dtnasnimento: "10/01/2012", nSUS:"12345678"},
    {usuario: "Jeremias Azevedo", cpf:"789.123.456-90", dtnasnimento: "20/01/2011", nSUS:"12345678"},

  ]

}
