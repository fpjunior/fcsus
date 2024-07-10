import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'fcsus';
  user: any = {};
  submitForm() {
    console.log(this.user); // Aqui você pode processar os dados do formulário
    // Por exemplo, você pode enviar os dados para um serviço ou fazer outras operações necessárias
}

  constructor(){

  }
}
