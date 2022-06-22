import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { KafkaMessage } from 'kafkajs';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @MessagePattern('create-account')
  create(@Payload() { value }: KafkaMessage) {
    const data: CreateAccountDto = { ...value['data'] };
    return this.accountService.create(data);
  }
}
