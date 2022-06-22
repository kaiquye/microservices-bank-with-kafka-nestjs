import { Controller, UseFilters } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { KafkaMessage } from 'kafkajs';
import { TransferValueDto } from './dto/transfer-value.dto';
import { AppError } from '../../models/error/error.model';
import { ExceptionFilter } from '../../models/error/rpc.model';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @MessagePattern('create-account')
  create(@Payload() { value }: KafkaMessage) {
    const data: CreateAccountDto = { ...value['data'] };
    return this.accountService.create(data);
  }
  @UseFilters(new ExceptionFilter())
  @MessagePattern('validade-balance')
  validadeBalance(@Payload() { value }: KafkaMessage) {
    const specs: TransferValueDto = { ...value['data'] };
    console.log(specs);
    return this.accountService.validadeBalanceAndBarCode(specs);
  }
  @UseFilters(new ExceptionFilter())
  @MessagePattern('teste2')
  transfer() {
    console.log('-----------');
  }
}
