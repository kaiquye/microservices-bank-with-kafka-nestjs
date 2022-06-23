import { IAddress } from '../interfaces/address.interface';

export class CreateAddressDto implements IAddress {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  localidade: string;
  logradouro: string;
  uf: string;
}
