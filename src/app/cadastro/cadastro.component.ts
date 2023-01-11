import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cadastro } from './cadastro';
import { CadastroService } from './cadastro.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  cadastroForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder, 
    private cadastroService: CadastroService){}

  ngOnInit(): void{
    this.cadastroForm = this.formBuilder.group({
      nome:[''],
      preco:[''],
      quantidade:['']
    })
  }

  cadastrar(){
    const novoCadastro = this.cadastroForm.getRawValue() as Cadastro;
    console.log(novoCadastro);
    this.cadastroService.cadastrar(novoCadastro).subscribe((d)=> {
    },
      (e)=> {alert('Verifique os dados e tente novamente.')})
    
  }

}
