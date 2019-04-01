import { LancamentoService } from './../lancamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Lancamento } from 'src/app/shared/model/lancamento.model';
import { LazyLoadEvent, ConfirmationService, Message } from 'primeng/components/common/api';
import { LancamentoFilter } from 'src/app/shared/model/filtros/lancamento.filter';
import { ToastyService } from 'ng2-toasty';
import * as moment from 'moment';
import { ErrorHandleService } from 'src/app/core/error-handle.service';

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
  msgs: Message[] = [];

  constructor(
    private toasty: ToastyService,
    private lancamentoService: LancamentoService,
    private confirmation: ConfirmationService,
    private errorHandle: ErrorHandleService,
    ) { }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar( this.filtro )
      .subscribe(dados => {
        this.totalRegistros = dados.total;
        this.lancamentos = dados.lancamentos.content;
      }, (error) => this.errorHandle.handle(error));
  }

  excluir(codigo: any) {
    this.lancamentoService.excluir(codigo).subscribe((response) => {
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

    },
    (response) => this.onError(response));
  }

  ngOnInit() {
    // this.pesquisar();
  }

  onMudarPagina(event: LazyLoadEvent) {
    const pagina = (event.first / event.rows);
    this.pesquisar(pagina);
  }

  confirmExclusao(codigo: number) {
    this.confirmation.confirm({
        message: 'Deseja realmente excluir?',
        header: 'Confirmação de exclusão',
        icon: 'pi pi-question-circle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => {
            this.excluir(codigo);
        }
    });
  }

  protected onError(errorMessage: any) {
    this.toasty.error({
      title: 'Erro ao tentar excluir',
      msg: errorMessage.error[0].mensagemUsuario,
      showClose: true,
      timeout: 5000
    });
  }

  isVencido(data: Date) {
    return moment(moment(data).format('YYYY-MM-DD')).isBefore(moment(new Date()).format('YYYY-MM-DD'));
  }

}
