import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA', icon: 'pi pi-angle-down' },
    { label: 'Despesa', value: 'DESPESA', icon: 'pi pi-angle-up' }
  ];

  categorias = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 }
  ];

  pessoas = [
    {label: 'Lucas Barros Santos', value: 1},
    {label: 'Joane Amorim Santos Barros', value: 2}
  ];

  constructor() { }

  ngOnInit() {
  }

}
