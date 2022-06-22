import { AbstractRepositoryPrisma } from '../../database/repository/abstract.repository.prisma';
import { IAccount } from './interface/account.interface';
import { PrismaService } from '../../database/connection.prisma';
import { EnumDatabasePrisma } from '../../enums/enum.database.prisma';
import { Injectable } from '@nestjs/common';
import { typeNewAccountSpecs } from './interface/newAccount.type';
import { TransferValueDto } from './dto/transfer-value.dto';

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
            status: data.status,
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
            status: data.status,
          },
        },
      },
      include: { account_inactive: true },
    });
  }

  existsOnwer(phone: number, email: string) {
    return this.prisma.oWNER.findFirst({
      where: {
        phone: phone,
      },
    });
  }

  validadeBalancde(data: TransferValueDto) {
    return this.prisma.oWNER.findFirst({
      where: {
        OR: [{ phone: data.phone }, { email: data.email }],
      },
      select: {
        phone: true,
        account: {
          select: {
            balance: true,
          },
        },
      },
    });
  }

  findByBarCode(bar_code: string) {
    return this.prisma.aCCOUNT.findUnique({
      where: { bar_code: bar_code },
      select: {
        id: true,
      },
    });
  }

  async transfer(data: TransferValueDto) {
    console.log(data.value, data.bar_code_to_transfer);
    const { id } = await this.prisma.oWNER.findFirst({
      where: {
        email: data.email,
      },
      select: {
        id: true,
      },
    });
    await this.prisma.$transaction([
      this.prisma.aCCOUNT.update({
        where: {
          id: id,
        },
        data: {
          balance: { increment: -Number(data.value) },
        },
      }),
      this.prisma.aCCOUNT.update({
        where: {
          bar_code: data.bar_code_to_transfer,
        },
        data: { balance: { increment: +Number(data.value) } },
      }),
    ]);
  }
}
