import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

export const routes: Routes = [

  // Lancamentos
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  { path: 'lancamentos', loadChildren: '../app/lancamentos/lancamentos.module#LancamentosModule' },

  // Pessoas
  { path: 'pessoas', loadChildren: '../app/pessoas/pessoas.module#PessoasModule' },

  // Alternativas
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
