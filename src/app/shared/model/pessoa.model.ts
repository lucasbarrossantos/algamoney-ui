export interface Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

export class Pessoa {
  constructor(
    public codigo?: number,
    public nome?: string,
    public ativo?: boolean,
    public endereco?: Endereco
  ) { }
}
