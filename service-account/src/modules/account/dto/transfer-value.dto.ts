import { CreateAccountDto } from './create-account.dto';

export class TransferValueDto implements CreateAccountDto {
  email: string;
  fist_name: string;
  ownerId: number;
  phone: number;
  value: number;
  bar_code_to_transfer: string;
  acess_token: string;
}
