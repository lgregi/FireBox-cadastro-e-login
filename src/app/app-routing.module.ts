import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import {AcessoComponent} from './acesso/acesso.component'
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './home/produtos/produtos.component';

const routes: Routes = [
  {path: '', component:AcessoComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'home', component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
