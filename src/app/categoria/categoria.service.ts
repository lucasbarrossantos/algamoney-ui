import { Categoria } from './../shared/model/categoria.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private resourceUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  listarTodas(): Observable<any> {
    return this.http.get<Categoria[]>(`${this.resourceUrl}/categorias`, {
      params: null, observe: 'response',
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
       Authorization: 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg=='
     })
    });
  }

}
