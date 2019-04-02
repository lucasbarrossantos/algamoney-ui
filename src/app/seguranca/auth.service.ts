import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';

  constructor(private http: HttpClient) { }

  login(usuario: string, senha: string): Observable<any> {

    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    console.log('chegou no login service');
    return this.http.post(this.oauthTokenUrl, body, {
      observe: 'response',
      headers: new HttpHeaders({
        Authorization: 'Basic YW5ndWxhcjpAbmd1bEByMA==',
        'Content-Type': 'application/x-www-form-urlencoded',
      })
     });
  }

}
