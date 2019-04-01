import { Endereco } from './../../shared/model/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandleService } from 'src/app/core/error-handle.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa: Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private errorHandle: ErrorHandleService
    ) {
      this.pessoa = new Pessoa();
    }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.pessoaService.salvar(this.pessoa).subscribe(() => {
      this.toasty.success('Pessoa salva com sucesso!');
      form.reset();
      this.pessoa = new Pessoa();
    }, (error) => this.errorHandle.handle(error));
  }

}
