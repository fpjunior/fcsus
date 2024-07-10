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
