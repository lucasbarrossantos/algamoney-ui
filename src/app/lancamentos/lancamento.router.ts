import { Lancamento } from '../shared/model/lancamento.model';
import { LancamentoService } from './lancamento.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { PaginaNaoEncontradaComponent } from '../core/pagina-nao-encontrada.component';

@Injectable({ providedIn: 'root' })
export class LancamentoResolve implements Resolve<Lancamento> {

    constructor(private service: LancamentoService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Lancamento> {
        const id = route.params['codigo'] ? route.params['codigo'] : null;
        if (id) {
            return this.service.buscarPorCodigo(id).pipe(
                map((lancamento: HttpResponse<Lancamento>) => lancamento.body)
            );
        }
        return of(new Lancamento());
    }
}

export const lancamentoRoute: Routes = [
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
