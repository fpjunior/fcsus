import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {


  constructor(private http: HttpClient) {
    const app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(app);
  }

  private db: any;

  getPacientes(): Observable<any> {
    const pacientesCollection = collection(this.db, 'pacientes');
    return from(getDocs(pacientesCollection)).pipe(
      map(querySnapshot => {
        return querySnapshot.docs.map(doc => doc.data());
      })
    );
  }
}
