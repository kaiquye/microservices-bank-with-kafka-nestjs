import { iNewTransferInterface } from '../interface/new-transfer-interface';
import { IsNumber, IsString } from 'class-validator';

export class NewTransferDto {
  @IsString()
  bar_code_to_transfer: string;
  @IsNumber()
  value: number;
}
