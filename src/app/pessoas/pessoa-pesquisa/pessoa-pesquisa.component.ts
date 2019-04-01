import { PessoaService } from './../pessoa.service';
import { Pessoa } from './../../shared/model/pessoa.model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { PessoaFilter } from 'src/app/shared/model/filtros/pessoa.filter';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandleService } from 'src/app/core/error-handle.service';
import { Subscription } from 'rxjs';
import { EventEmitterService } from 'src/app/shared/utils/event.manager';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit, OnDestroy {

  pessoas: Pessoa[];
  filtro = new PessoaFilter();
  totalRegistros = 0; // Qtd de registro do retorno da consulta
  @ViewChild('tabela') grid; // @ViewChild('?') recupera algum dado da view
  sub: Subscription;

  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandle: ErrorHandleService
    ) {
      EventEmitterService.get('PessoasListModification').subscribe((data) => {
        this.grid.first = 0;
        this.pesquisar();
      });
    }

  ngOnInit() {
    this.sub = EventEmitterService.get('PessoasListModification').subscribe( data => {} );
    console.log('init', this.sub);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log('destroy', this.sub);
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar( this.filtro ).subscribe((dados) => {
      this.totalRegistros = dados.total;
      this.pessoas = dados.pessoas;
    }, (error) => this.errorHandle.handle(error));
  }

  onMudarPagina(event: LazyLoadEvent) {
    const pagina = (event.first / event.rows);
    this.pesquisar(pagina);
  }

  confirmExclusao(codigo: number, parametro: any) {
    this.confirmation.confirm({
        message: `Deseja realmente excluir ${parametro} ?`,
        header: 'Confirmação de exclusão',
        icon: 'pi pi-question-circle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => {
            this.excluir(codigo);
        }
    });
  }

  excluir(codigo: any) {
    this.pessoaService.excluir(codigo).subscribe((response) => {

      this.toasty.success({
        title: 'Exclusão de Pessoa',
        msg: 'Pessoa excluída com sucesso!',
        showClose: true,
        timeout: 5000
      });

      EventEmitterService.get('PessoasListModification').emit({
        nome: 'PessoasListModification',
        mensagem: 'Pessoa alterada.'
      });

    },
    (response) => this.onError(response));
  }

  protected onError(errorMessage: any) {
    this.toasty.error({
      title: 'Erro ao tentar excluir',
      msg: errorMessage.error[0].mensagemUsuario,
      showClose: true,
      timeout: 5000
    });
  }

}
