export class Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

export class Pessoa {
  codigo?: number;
  nome?: string;
  ativo?: boolean;
  endereco = new Endereco();

  constructor() {
    this.ativo = true;
  }

}
