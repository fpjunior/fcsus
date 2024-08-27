import { Component, OnInit } from '@angular/core';
import { PacienteService } from './paciente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteComponent implements OnInit {

  pacientes$!: Observable<any>;
  obj: any;
  user: any = {};

  submitForm() {
    let dataAtual = new Date().toLocaleString().split(",")[0];
    if(new Date(this.user.dtNascimento).toLocaleString().split("-")[0] === dataAtual){
      alert("A data atual é: " + dataAtual)
    }else{
      alert("Data preenchida não é igual a data atual")
    }
    console.log(this.user);
    // Aqui você pode processar os dados do formulário
    // Por exemplo, você pode enviar os dados para um serviço ou fazer outras operações necessárias
}


  constructor(private pacienteService: PacienteService) {

  }
  ngOnInit(): void {
    this.pacientes$ = this.pacienteService.getPacientes();

    this.pacientes$.subscribe({
      next: (result: any) => {
        console.log(result);
        this.obj = result;
      },
      error: (error) => {
        console.log(error);
      }
    });

    console.log(this.pacientes$);
  }



}

function formatData(dtNascimento: string) {
  const [year, month, day] = dtNascimento.split('-');
  return `${day}-${month}-${year}`
}
const originalDate = "2024-07-31";
const formattedDate = formatData(originalDate);

console.log(formattedDate);
