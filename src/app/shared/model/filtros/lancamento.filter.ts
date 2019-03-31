import { ITEMS_POR_PAGINA } from '../../constants/paginacao-constant';

export class LancamentoFilter {
    descricao: string;
    dataDeVencimentoDe: Date;
    dataDeVencimentoAte: Date;
    pagina: number;
    itensPorPagina = ITEMS_POR_PAGINA;
}
