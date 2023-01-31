import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Cadastro } from '../cadastro/cadastro';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http:HttpClient) {}

  readonly API = 'http://localhost:8080/produtos'

  list(){
    return this.http.get<any[]>(this.API)
    .pipe(
      tap(clientes => console.log(clientes))
    );
  }


  listNome(nome: string): Observable<any>{
    return this.http.get<any>(`${this.API}?nome=${nome}`)
    .pipe(
      map(clientes => clientes)
    );
  }

  atualizar(cadastro: Cadastro):Observable<Cadastro>{
    return this.http.put<Cadastro>(`${this.API}/${cadastro.id}`, cadastro.quantidade = cadastro.quantidade - (cadastro.qnt || 0))
    .pipe(
      tap(cadastro => console.log(cadastro))
    )
  }

}
