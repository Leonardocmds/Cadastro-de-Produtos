import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http:HttpClient) {}

  cadastrar(cadastro:Cadastro){
    return this.http.post('http://localhost:8080/produtos', cadastro)

  }

}
