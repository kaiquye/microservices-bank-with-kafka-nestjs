import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @MessagePattern('new-account')
  create(@Payload() createAccountDto: CreateAccountDto) {
    console.log('teste');
  }
}
