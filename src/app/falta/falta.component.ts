import { Component } from '@angular/core';
import { Cadastro } from '../cadastro/cadastro';
import { FaltaService } from './falta.service';

@Component({
  selector: 'app-falta',
  templateUrl: './falta.component.html',
  styleUrls: ['./falta.component.css']
})
export class FaltaComponent {

  cadastro!: Cadastro[];

  constructor(private service:FaltaService){}

  ngOnInit(): void {
    this.listar();
   }

  listar(){
    this.service.list().subscribe((dados) => (this.cadastro = dados))
  }


}
