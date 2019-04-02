import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoResolve } from './lancamentos/lancamento.router';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  {
      path: 'lancamentos',
      component: LancamentosPesquisaComponent
  },
  {
      path: 'novo',
      component: LancamentoCadastroComponent,
      resolve: {
          lancamento: LancamentoResolve
      },
      data: {
          pageTitle: 'Novo lançamento'
      }
  },
  {
      path: 'lancamentos/:codigo',
      component: LancamentoCadastroComponent,
      resolve: {
          lancamento: LancamentoResolve
      },
      data: {
          pageTitle: 'Edição de lançamento'
      }
  },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
