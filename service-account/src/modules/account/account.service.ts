import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountRepository } from './account.repository';
import { typeNewAccountSpecs } from './interface/newAccount.type';
import { hashSync } from 'bcrypt';
import { generating } from './util/generator_key.util';
import { createTracing } from "trace_events";

@Injectable()
export class AccountService {
  constructor(private accountRepository: AccountRepository) {}
  async create(createAccountDto: CreateAccountDto) {
    console.log(createAccountDto)
    let status: string = undefined;
    let active: boolean = false;
    try {
      const specsNewAccount: typeNewAccountSpecs = {
        ...createAccountDto,
        active: true,
        balance: 0,
        bar_code: generating(createAccountDto.phone).number().toString(),
        model: 'current',
        status: 'finished',
      };
      status = 'finished';
      active = true;
      await this.accountRepository.createAccountByOwner(specsNewAccount);
    } catch (err) {
      console.log(err)
      const specsNewAccountInactive: typeNewAccountSpecs = {
        ...createAccountDto,
        active: false,
        balance: 0,
        bar_code: generating(createAccountDto.phone).number().toString(),
        model: 'current',
        status: 'inactive',
      };
      await this.accountRepository.createAccountInactive(
        specsNewAccountInactive,
      );
    } finally {
      console.log(status, active)
    }
  }
}
