import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Cadastro } from '../cadastro/cadastro';

@Injectable({
  providedIn: 'root'
})
export class FaltaService {

  constructor(private http:HttpClient) {}

  readonly API = 'http://localhost:8080/produtos/faltas'

  list(){
    return this.http.get<any[]>(this.API)
    .pipe(
      tap(clientes => console.log(clientes))
    );
  }

}
