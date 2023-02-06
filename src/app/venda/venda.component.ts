import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cadastro } from '../cadastro/cadastro';
import { VendaService } from './venda.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent {
  cadastros: Cadastro[] = [];
  cadastro!: Cadastro;
  cadastroSelecionado: Cadastro[] = [];
  pesquisar!: string;
  precoFinal: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private vendaService:VendaService
  ) { }

  ngOnInit(): void { }

  listar() {
    this.vendaService
      .listNome(this.pesquisar)
      .subscribe((dados) => (this.cadastros = dados));
  }

  mover(cadastro: Cadastro, index: number) {
    const jaAdicionado = this.cadastroSelecionado.filter(
      (cad) => cad.nome == cadastro.nome
    )[0];
    if ((cadastro.qnt || 0) > cadastro.quantidade) {
      alert('quantidade para venda maior do que no estoque')

    }else if(jaAdicionado){
      alert('ja adc')
    }else{

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

    this.vendaService.atualizar(cadastro).subscribe(
      (dados) => {

      })

  }



}
