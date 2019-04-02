import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaService } from './pessoa.service';
import { Injectable, NgModule } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Pessoa } from '../shared/model/pessoa.model';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

@Injectable({ providedIn: 'root' })
export class PessoaResolve implements Resolve<Pessoa> {

    constructor(private service: PessoaService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Pessoa> {
        const id = route.params.codigo ? route.params.codigo : null;
        if (id) {
            return this.service.buscarPorCodigo(id).pipe(
                map((pessoa: HttpResponse<Pessoa>) => pessoa.body)
            );
        }
        return of(new Pessoa());
    }
}

export const routes: Routes = [
    { path: '', component: PessoaPesquisaComponent },
    {
        path: 'nova',
        component: PessoaCadastroComponent,
        resolve: {
            pessoa: PessoaResolve
        }
    },
    {
        path: ':codigo',
        component: PessoaCadastroComponent,
        resolve: {
            pessoa: PessoaResolve
        }
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })
export class PessoasRoutingModule { }
