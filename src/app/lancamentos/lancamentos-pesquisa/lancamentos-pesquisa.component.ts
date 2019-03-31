import { LancamentoService } from './../lancamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Lancamento } from 'src/app/shared/model/lancamento.model';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { LancamentoFilter } from 'src/app/shared/model/filtros/lancamento.filter';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  pt = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  };

  lancamentos: Lancamento[];
  filtro = new LancamentoFilter();
  totalRegistros = 0; // Qtd de registro do retorno da consulta
  @ViewChild('tabela') grid; // @ViewChild('?') recupera algum dado da view

  constructor(private toasty: ToastyService, private lancamentoService: LancamentoService) { }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar( this.filtro )
      .subscribe(dados => {
        this.totalRegistros = dados.total;
        this.lancamentos = dados.lancamentos.content;
      });
  }

  excluir(codigo: any) {
    if (this.grid.first === 0) {
      this.pesquisar();
    } else {
      this.grid.first = 0;
    }

    this.toasty.success({
      title: 'Exclusão de Lançamento',
      msg: 'Lançamento excluído com sucesso!',
      showClose: true,
      timeout: 5000
    });

  }

  ngOnInit() {
    // this.pesquisar();
  }

  onMudarPagina(event: LazyLoadEvent) {
    const pagina = (event.first / event.rows);
    this.pesquisar(pagina);
  }

}
