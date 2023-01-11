import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';
import { RouterModule } from '@angular/router';
import { CadastroModule } from 'src/app/cadastro/cadastro.module';



@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,RouterModule,CadastroModule
  ],
  exports:[
    CabecalhoComponent
  ]
})
export class CabecalhoModule { }
