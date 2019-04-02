import { Lancamento } from '../shared/model/lancamento.model';
import { LancamentoService } from './lancamento.service';
import { Injectable, NgModule } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';

@Injectable({ providedIn: 'root' })
export class LancamentoResolve implements Resolve<Lancamento> {

    constructor(private service: LancamentoService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Lancamento> {
        const id = route.params.codigo ? route.params.codigo : null;
        if (id) {
            return this.service.buscarPorCodigo(id).pipe(
                map((lancamento: HttpResponse<Lancamento>) => lancamento.body)
            );
        }
        return of(new Lancamento());
    }
}

export const routes: Routes = [
    { path: '', component: LancamentosPesquisaComponent },
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
        path: ':codigo',
        component: LancamentoCadastroComponent,
        resolve: {
            lancamento: LancamentoResolve
        },
        data: {
            pageTitle: 'Edição de lançamento'
        }
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })
export class LancamentosRoutingModule { }
