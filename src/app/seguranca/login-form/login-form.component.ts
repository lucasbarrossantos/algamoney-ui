import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(usuario: string, senha: string) {
    console.log('usuario: ' + usuario + ' senha: ' + senha);

    this.authService.login(usuario, senha).subscribe((response) => {
      console.log('response', response);
    });
  }

}
