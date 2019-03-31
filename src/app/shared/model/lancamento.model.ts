import { Moment } from 'moment';

export const enum TipoLancamento {
    RECEITA = 'RECEITA',
    DESPESA = 'DESPESA'
}

export class Lancamento {
  constructor(
      public id?: number,
      public descricao?: string,
      public dataVencimento?: Moment,
      public dataPagamento?: Moment,
      public valor?: number,
      public observacao?: string,
      public categoriaId?: number,
      public pessoaId?: number,
      public tipo?: TipoLancamento
   ) {}
}
