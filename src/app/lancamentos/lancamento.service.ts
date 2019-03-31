import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

export class LancamentoFilter {
  descricao: string;
  dataDeVencimentoDe: Date;
  dataDeVencimentoAte: Date;
  pagina = '0';
  itensPorPagina = '5';
}

@Injectable({ providedIn: 'root' })
export class LancamentoService {

  public resourceUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFilter): Observable<any> {
    let param = new HttpParams();

    param = param.set('page', filtro.pagina);
    param = param.set('size', filtro.itensPorPagina);
    param = this.filtros(filtro, param);

    console.log('param', param);

    return this.http.get<any>(`${this.resourceUrl}/lancamentos?resumo`,
      {
         params: param, observe: 'response',
         headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
        })
      });

  }


  private filtros(filtro: LancamentoFilter, param: HttpParams) {
    if (filtro.descricao) {
      param = param.set('descricao', filtro.descricao);
    }
    if (filtro.dataDeVencimentoDe) {
      param = param.set('dataDeVencimentoDe', moment(filtro.dataDeVencimentoDe).format('YYYY-MM-DD'));
    }
    if (filtro.dataDeVencimentoAte) {
      param = param.set('dataDeVencimentoAte', moment(filtro.dataDeVencimentoAte).format('YYYY-MM-DD'));
    }
    return param;
  }
}
