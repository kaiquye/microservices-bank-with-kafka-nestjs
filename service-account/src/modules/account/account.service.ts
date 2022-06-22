import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountRepository } from './account.repository';
import { typeNewAccountSpecs } from './interface/newAccount.type';
import { hashSync } from 'bcrypt';
import { generating } from './util/generator_key.util';

@Injectable()
export class AccountService {
  constructor(private accountRepository: AccountRepository) {}
  async create(createAccountDto: CreateAccountDto) {
    try {
      const specsNewAccount: typeNewAccountSpecs = {
        ...createAccountDto,
        active: true,
        balance: 0,
        bar_code: generating(createAccountDto.phone).number().toString(),
        model: 'current',
      };
      await this.accountRepository.createAccountByOwner(specsNewAccount);
    } catch (err) {
      console.log(err);
    }
  }
}
