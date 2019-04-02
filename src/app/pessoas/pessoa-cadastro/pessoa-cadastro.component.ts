import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandleService } from 'src/app/core/error-handle.service';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private errorHandle: ErrorHandleService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
    ) { }

  ngOnInit() {
    this.title.setTitle('Nova pessoa');
    this.route.data.subscribe(({ pessoa }) => {
      this.pessoa = pessoa;
    });
  }

  get editando() {
    return Boolean(this.pessoa.codigo);
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarPessoa(form);
    } else {
      this.adicionarPessoa(form);
    }
  }

  adicionarPessoa(form: FormControl) {
    this.pessoaService.salvar(this.pessoa).subscribe(() => {
      this.toasty.success('Pessoa salva com sucesso!');
      form.reset();
      this.pessoa = new Pessoa();
      this.router.navigate(['/pessoas']);
    }, (error) => this.errorHandle.handle(error));
  }

  atualizarPessoa(form: FormControl) {
    this.pessoaService.atualizar(this.pessoa).subscribe(() => {
      this.toasty.success('Pessoa atualizada com sucesso!');
      form.reset();
      this.pessoa = new Pessoa();
      this.router.navigate(['/pessoas']);
    }, (error) => this.errorHandle.handle(error));
  }

}
