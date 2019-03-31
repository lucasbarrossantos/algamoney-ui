import { PessoaService } from './../pessoa.service';
import { Pessoa } from './../../shared/model/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { PessoaFilter } from 'src/app/shared/model/filtros/pessoa.filter';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {

  pessoas: Pessoa[];
  filtro = new PessoaFilter();
  totalRegistros = 0; // Qtd de registro do retorno da consulta

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() { }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar( this.filtro ).subscribe((dados) => {
      this.totalRegistros = dados.total;
      this.pessoas = dados.pessoas;
    });
  }

  onMudarPagina(event: LazyLoadEvent) {
    const pagina = (event.first / event.rows);
    this.pesquisar(pagina);
  }

}
