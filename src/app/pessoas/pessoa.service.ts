import { Pessoa } from './../shared/model/pessoa.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PessoaFilter } from '../shared/model/filtros/pessoa.filter';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  public resourceUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

   pesquisar(filtro: PessoaFilter): Observable<any> {
    let param = new HttpParams();
    param = this.filtros(filtro, param);

    return this.http.get<Pessoa[]>(`${this.resourceUrl}/pessoas`, {
      params: param, observe: 'response',
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
       Authorization: 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
     })
   }).pipe(map((res: any) => this.convertDateArrayFromServer(res)));
  }

  listarTodas(): Observable<any> {
    return this.http.get<Pessoa[]>(`${this.resourceUrl}/pessoas`, {
      params: null, observe: 'response',
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
       Authorization: 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
     })
    });
  }

  listarPessoasResumo(): Observable<any> {
    return this.http.get<Pessoa[]>(`${this.resourceUrl}/pessoas?resumo`, {
      params: null, observe: 'response',
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
       Authorization: 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
     })
    });
  }

  atualizarStatus(pessoa: Pessoa): Observable<any> {
    return this.http.put<Pessoa[]>(`${this.resourceUrl}/pessoas/${pessoa.codigo}/ativo`, !pessoa.ativo , {
      params: null, observe: 'response',
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
       Authorization: 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
     })
    });
  }

  excluir(codigo: number) {
    return this.http.delete<any>(`${this.resourceUrl}/pessoas/${codigo}`, {
      observe: 'response',
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
       Authorization: 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
      })
    });
  }

  salvar(pessoa: Pessoa): Observable<any> {
    return this.http.post<Pessoa>(`${this.resourceUrl}/pessoas`, pessoa , {
      params: null, observe: 'response',
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
    if (filtro.nome) {
      param = param.set('nome', filtro.nome);
    }

    return param;
  }

  protected convertDateArrayFromServer(res: any): any {
    let resultado = {};
    if (res.body) {
        resultado = {
          pessoas: res.body.content,
          total: res.body.totalElements
        };
    }
    return resultado;
  }

}
