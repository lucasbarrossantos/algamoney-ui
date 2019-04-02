import { ToastyService } from 'ng2-toasty';
import { LancamentoService } from './../lancamento.service';
import { FormControl } from '@angular/forms';
import { Lancamento } from 'src/app/shared/model/lancamento.model';
import { PessoaService } from './../../pessoas/pessoa.service';
import { Pessoa } from './../../shared/model/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/shared/model/categoria.model';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { ErrorHandleService } from 'src/app/core/error-handle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

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

  tipos = [
    { label: 'Receita', value: 'RECEITA', icon: 'pi pi-angle-down' },
    { label: 'Despesa', value: 'DESPESA', icon: 'pi pi-angle-up' }
  ];

  categorias: Categoria[];
  pessoas: Pessoa[];
  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private lancamentoService: LancamentoService,
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private errorHandle: ErrorHandleService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
    ) { }

  ngOnInit() {
    this.title.setTitle('Novo lançamento');
    this.route.data.subscribe(({ lancamento }) => {
      this.lancamento = lancamento;
    });

    this.carregarCategorias();
    this.carregarPessoas();
  }

  get editando() {
    return Boolean(this.lancamento.codigo);
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarLancamento(form);
    } else {
      this.adicionarLancamento(form);
    }
  }

  adicionarLancamento(form: FormControl) {
    this.lancamentoService.salvar(this.lancamento).subscribe(() => {
      this.toasty.success('Lançamento salvo com sucesso!');
      form.reset();
      this.lancamento = new Lancamento();

      this.router.navigate(['/lancamentos']);
    }, (error) => this.errorHandle.handle(error));
  }

  atualizarLancamento(form: FormControl) {
    this.lancamentoService.atualizar(this.lancamento).subscribe(() => {
      this.toasty.success('Lançamento atualizado com sucesso!');
      form.reset();
      this.lancamento = new Lancamento();

      this.router.navigate(['/lancamentos']);
    }, (error) => this.errorHandle.handle(error));
  }

  carregarCategorias() {
    this.categoriaService.listarTodas().subscribe((dados) => {
      this.categorias = dados.body.map(c => ({ label: c.nome, value: c.codigo }));
    });
  }

  carregarPessoas() {
    this.pessoaService.listarPessoasResumo().subscribe((dados) => {
      this.pessoas = dados.body.content.map(c => ({ label: c.nome, value: c.codigo }));
    });
  }

}
