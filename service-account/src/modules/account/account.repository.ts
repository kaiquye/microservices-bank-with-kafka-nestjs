import { AbstractRepositoryPrisma } from '../../database/repository/abstract.repository.prisma';
import { IAccount } from './interface/account.interface';
import { PrismaService } from '../../database/connection.prisma';
import { EnumDatabasePrisma } from '../../enums/enum.database.prisma';
import { Injectable } from '@nestjs/common';
import { typeNewAccountSpecs } from './interface/newAccount.type';

@Injectable()
export class AccountRepository extends AbstractRepositoryPrisma<IAccount> {
  constructor(private prisma: PrismaService) {
    super(EnumDatabasePrisma.account, prisma);
  }
  createAccountByOwner(data: typeNewAccountSpecs) {
    return this.prisma.oWNER.create({
      data: {
        phone: data.phone,
        fist_name: data.fist_name,
        active: data.active,
        email: data.email,
        account: {
          create: {
            bar_code: data.bar_code,
            balance: data.balance,
            model: data.model,
          },
        },
      },
      include: { account: true },
    });
  }

  createAccountInactive(data: typeNewAccountSpecs) {
    return this.prisma.oWNER.create({
      data: {
        phone: data.phone,
        fist_name: data.fist_name,
        active: data.active,
        email: data.email,
        account_inactive: {
          create: {
            bar_code: data.bar_code,
            balance: data.balance,
            model: data.model,
          },
        },
      },
      include: { account_inactive: true },
    });
  }
}
