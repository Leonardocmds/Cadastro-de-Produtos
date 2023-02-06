import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaltaComponent } from './falta.component';

const routes: Routes = [
  {
    path:'',
    component: FaltaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaltaRoutingModule { }