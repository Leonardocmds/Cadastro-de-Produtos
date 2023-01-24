import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Cadastro } from '../cadastro/cadastro';
import { EstoqueService } from './estoque.service';


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  cadastros : Cadastro[] = []
  cadastro!: Cadastro;
  cadastroSelecionado: Cadastro[] = []
  displayedColumns = ['nome', 'preco', 'quantidade']

  pesquisar!: string;

  constructor(private formBuilder: FormBuilder,
     private http:HttpClient,
     private estoqueService: EstoqueService){

     }



  ngOnInit(): void {
   
 
  }


  hehe(cadastro: Cadastro){
    const valor = (<HTMLInputElement>document.getElementById("valorSoma")).value;
    const xd = parseFloat(valor) * cadastro.preco;
    return xd;
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
      const valor = (<HTMLInputElement>document.getElementById("valorSoma")).value;
       const xd = parseFloat(valor) * c.preco;
       console.log(xd);
    }
    


    
}




}
