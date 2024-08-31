import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';
import { PacienteComponent } from './paciente/paciente.component';

const routes: Routes = [
  { path: '', component: PacienteComponent },
  { path: 'Lista-paciente', component: ListaPacienteComponent },
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
