import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Lancamento } from '../shared/model/lancamento.model';
import { LancamentoFilter } from '../shared/model/filtros/lancamento.filter';

@Injectable({ providedIn: 'root' })
export class LancamentoService {

  public resourceUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFilter): Observable<any> {
    let param = new HttpParams();

    param = this.filtros(filtro, param);

    return this.http.get<Lancamento[]>(`${this.resourceUrl}/lancamentos?resumo`,
      {
         params: param, observe: 'response',
         headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
        })
      }).pipe(map((res: any) => this.convertDateArrayFromServer(res)));

  }

  excluir(codigo: number) {
    return this.http.delete<any>(`${this.resourceUrl}/${codigo}`, {
      observe: 'response',
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
       Authorization: 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      })
    });
  }


  private filtros(filtro: any, param: HttpParams) {
    // Parametros de paginacao
    param = param.set('page', filtro.pagina);
    param = param.set('size', filtro.itensPorPagina);

    // Parametros de filtragens
    if (filtro.descricao) {
      param = param.set('descricao', filtro.descricao);
    }
    if (filtro.dataDeVencimentoDe) {
      param = param.set('dataDeVencimentoDe',
        moment(filtro.dataDeVencimentoDe).format('YYYY-MM-DD'));
    }
    if (filtro.dataDeVencimentoAte) {
      param = param.set('dataDeVencimentoAte',
        moment(filtro.dataDeVencimentoAte).format('YYYY-MM-DD'));
    }
    return param;
  }

  protected convertDateArrayFromServer(res: any): any {
    let resultado = {};
    if (res.body) {
        resultado = {
          lancamentos: res.body,
          total: res.body.totalElements
        };
    }
    return resultado;
  }

}
