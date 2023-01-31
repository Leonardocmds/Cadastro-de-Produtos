import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Cadastro } from '../cadastro/cadastro';
import { EstoqueService } from './estoque.service';


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
})
export class EstoqueComponent implements OnInit {
  cadastros: Cadastro[] = [];
  cadastro!: Cadastro;
  cadastroSelecionado: Cadastro[] = [];
  pesquisar!: string;
  precoFinal: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private estoqueService: EstoqueService
  ) { }

  ngOnInit(): void { }

  listar() {
    this.estoqueService
      .listNome(this.pesquisar)
      .subscribe((dados) => (this.cadastros = dados));
  }

  mover(cadastro: Cadastro, index: number) {
    const jaAdicionado = this.cadastroSelecionado.filter(
      (cad) => cad.nome == cadastro.nome
    )[0];
    if ((cadastro.qnt || 0) > cadastro.quantidade) {
      alert('quantidade errada')
   
    } else if (jaAdicionado) {
      alert('ja adc')
    
    } else {
      const xd = (cadastro.qnt || 0) * cadastro.preco;
      cadastro.total = xd;
      console.log(xd);
      this.cadastroSelecionado.push(cadastro);
      this.precoFinal += xd;

    }
  }

  vender(cadastro: Cadastro, index: number) {
    // const id = cadastro.id;
    // const diminuir = cadastro.quantidade - (cadastro.qnt || 0);
    // console.log('Nova quantidade: ' + diminuir)
    // console.log('Id: ' + id);

    this.estoqueService.atualizar(cadastro).subscribe(
      (dados) => {

      })

  }



}
