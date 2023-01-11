import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { Cadastro } from '../cadastro/cadastro';
import { EstoqueService } from './estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  cadastros : Cadastro[] = []
  cadastroSelecionado: Cadastro[] = []
  displayedColumns = ['nome', 'preco', 'quantidade']
  formP!: FormGroup;

  valor2!: number;
  valorTotal!: number;
  
  
  pesquisar!: string;

  constructor(private formBuilder: FormBuilder,
     private http:HttpClient,
     private estoqueService: EstoqueService){}



  ngOnInit(): void {
    this.formP = this.formBuilder.group({
      nome:['']

     })
  }






  listar(){
    this.estoqueService.listNome(this.pesquisar).subscribe(dados =>  this.cadastros = dados);
  }

  
  mover(cadastro: Cadastro) {
    const c = cadastro;
    const jaAdicionado = this.cadastroSelecionado.filter(cad => cad.nome == c.nome)[0]
   
    if(jaAdicionado){
      alert("JA adc")
    }else{

      this.cadastroSelecionado.push(cadastro)
    }
    


    
}




}
