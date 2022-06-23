export interface IAddress {
  id?: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  gia: string;
  ddd: string;
  ownerId?: number;
}
