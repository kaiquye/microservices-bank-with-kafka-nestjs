import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountRepository } from './account.repository';
import { typeNewAccountSpecs } from './interface/newAccount.type';
import { hashSync } from 'bcrypt';
import { generating } from './util/generator_key.util';
import { createTracing } from 'trace_events';
import { TransferValueDto } from './dto/transfer-value.dto';
import { AppError } from '../../models/error/error.model';

@Injectable()
export class AccountService {
  constructor(private accountRepository: AccountRepository) {}
  async create(createAccountDto: CreateAccountDto) {
    let status: string = undefined;
    let active = false;
    const exists = await this.accountRepository.existsOnwer(
      createAccountDto.phone,
      createAccountDto.email,
    );
    if (!exists) {
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
        status = 'inactive';
        active = false;
      } finally {
        console.log(status, active);
      }
      console.log('usuario já cadastrado');
    }
  }
  async validadeBalanceAndBarCode(data: TransferValueDto) {
    try {
      const existsAccount = await this.accountRepository.findByBarCode(
        data.bar_code_to_transfer,
      );
      if (!existsAccount)
        return new AppError('account not found', 404).rpcException;
      const { account } = await this.accountRepository.validadeBalancde(data);
      if (account[0].balance < data.value)
        return new AppError('balancde invalid', 400).rpcException;
      console.log(account[0].balance, data);
    } catch (err) {
      console.log(err);
    }
  }
}
