import { Categoria } from './categoria.model';
import { Moment } from 'moment';
import { Pessoa } from './pessoa.model';

export const enum TipoLancamento {
    RECEITA = 'RECEITA',
    DESPESA = 'DESPESA'
}

export class Lancamento {
    codigo: number;
    descricao: string;
    dataVencimento: Moment;
    dataPagamento: Moment;
    valor: number;
    observacao: string;
    categoria = new Categoria();
    pessoa = new Pessoa();
    tipo: TipoLancamento;
}
