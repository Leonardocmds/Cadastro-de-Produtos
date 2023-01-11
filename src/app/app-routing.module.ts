import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:"home",
  },
  {
    path:'home',
    loadChildren: ()=> import('./home/home.module').then((m)=> m.HomeModule),
  },
  {
    path:'estoque',
    loadChildren: ()=> import('./estoque/estoque.module').then((m)=> m.EstoqueModule),
  },
  {
    path:'cadastro',
    loadChildren: ()=> import('./cadastro/cadastro.module').then((m)=> m.CadastroModule)
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }