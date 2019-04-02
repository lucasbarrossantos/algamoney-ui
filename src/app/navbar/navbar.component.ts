import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Início',
        items: [
          { label: 'Categorias' },
          { label: 'Lançamentos', routerLink: '/lancamentos' },
          { label: 'Pessoas', routerLink: '/pessoas' }
        ]
      },
      {
        label: 'Financeiro',
        items: [
          { label: 'Lançamentos', routerLink: '/lancamentos' },
          { label: 'Boletos' },
          { label: 'Centro de custo' },
          { label: 'Contas' },
          { label: 'Tipos de parcela' },
          { label: 'Tipos de pagamento' },
          { label: 'Títulos' }
        ]
      },
      {
        label: 'Relatórios',
        items: [{ label: 'Relatório' }]
      },
      {
        label: 'Administração',
        items: [
          { label: 'Grupo de acesso' },
          { label: 'Papeis' },
          { label: 'Utilizadores' }
        ]
      },
      {
        label: 'Ajuda',
        items: [
          { label: 'Abrir chamado' },
          { label: 'Configurações' },
          { label: 'Sobre' },
          { label: 'Suporte', url: 'http://google.com' }
        ]
      }
    ];
  }
}
