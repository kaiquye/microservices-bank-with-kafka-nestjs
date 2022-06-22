import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AccountRepository } from './account.repository';
import { PrismaService } from '../../database/connection.prisma';

@Module({
  controllers: [AccountController],
  providers: [AccountService, AccountRepository, PrismaService],
})
export class AccountModule {}
